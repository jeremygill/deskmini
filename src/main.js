
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber: 'erica.talking@ivr.vc',
    services: [],
    instructions: [
      'Step 1: Open the application.',
      'Step 2: Navigate to the settings menu.',
      'Step 3: Select the desired configuration.',
      'Step 4: Save and exit.',
    ]
     
    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber, name: 'Call IT Support' },
        { url: this.dialNumber, name: 'Advice' },
        { url: this.dialNumber, name: 'Credit' },
     //   { url: this.instructions, name: 'Instructions', page: 'instructions'},
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

