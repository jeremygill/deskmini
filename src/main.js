function setup() {
  Alpine.store('model', {
    currentPage: 'home',
    currentLanguage: 'english',
    dialNumber: 'erica.talking@ivr.vc',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      const platform = params.get('platform')?.toLowerCase() || 'windows'; // default to windows

      console.log('Detected platform:', platform); // ✅ Debug log

      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }

      this.services = [
        { url: this.dialNumber, name: 'Call IT Support' },
      ];

      document.addEventListener('DOMContentLoaded', () => {
        const callITButton = document.getElementById('CallIT');
        if (callITButton) {
          callITButton.addEventListener('click', (event) => {
            event.preventDefault();

          
              triggerCiscoJoin(); // Call the function from cisco
             
         
              );
            }
          });
        }
      });
    },

    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },

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





