const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendOrderConfirmation = async (order) => {
  const itemsList = order.items
    .map(item => `${item.name} x${item.quantity} = ${item.total} грн`)
    .join('\n');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: order.customerInfo.email,
    subject: `Замовлення #${order.orderNumber} підтверджено`,
    text: `
Шановний(а) ${order.customerInfo.name},

Дякуємо за ваше замовлення в Paws & Whiskers!

Деталі замовлення #${order.orderNumber}:

${itemsList}

Загальна сума: ${order.totalAmount} грн

Адреса доставки:
${order.customerInfo.address}

Ми зв'яжемося з вами найближчим часом для уточнення деталей доставки.

З повагою,
Команда Paws & Whiskers
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = { sendOrderConfirmation };