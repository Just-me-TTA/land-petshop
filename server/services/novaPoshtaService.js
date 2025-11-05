const axios = require('axios');

class NovaPoshtaService {
  constructor() {
    this.apiKey = process.env.NOVA_POSHTA_API_KEY;
    this.apiUrl = 'https://api.novaposhta.ua/v2.0/json/';
  }

  async makeRequest(modelName, calledMethod, methodProperties = {}) {
    try {
      const response = await axios.post(this.apiUrl, {
        apiKey: this.apiKey,
        modelName,
        calledMethod,
        methodProperties
      });

      if (!response.data.success) {
        throw new Error(response.data.errors.join(', '));
      }

      return response.data.data;
    } catch (error) {
      console.error(`Nova Poshta API Error: ${error.message}`);
      throw error;
    }
  }

  async searchCities(searchQuery) {
    return this.makeRequest('Address', 'searchSettlements', {
      CityName: searchQuery,
      Limit: 10
    });
  }

  async getWarehouses(cityRef) {
    return this.makeRequest('AddressGeneral', 'getWarehouses', {
      CityRef: cityRef,
      Language: 'UA'
    });
  }
}

module.exports = new NovaPoshtaService();