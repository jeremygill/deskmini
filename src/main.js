function setup() {
  Alpine.store('model', {
    currentPage: 'home',
    currentLanguage: 'english',
    dialNumber: 'erica.talking@ivr.vc',
    services: [],

    init() {
      const params = new URLSearchParams(location.search);
      const platform = params.get('platform') || 'windows'; // default to windows

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

            if (platform === 'cisco') {
              // Cisco platform: trigger macro via panel click
              // This assumes the Cisco macro is listening for PanelId 'CallIT'
              console.log('Cisco platform detected. Panel click should be handled by macro.');
              // Optionally: trigger a webhook or send a signal to the Cisco device here
            } else {
              // Windows platform: open Teams meeting in browser
              window.open(
                'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjkzYWVjOWMtNTRhMy00MjgyLWEwZjAtOTM0MTgxM2RhNmMw%40thread.v2/0?context=%7b%22Tid%22%3a%2293b0ec50-fc3f-47ed-9345-9ffc6012541c%22%2c%22Oid%22%3a%22f4191fbd-c7c1-4fa0-8679-d380e280aebf%22%7d',
                '_blank'
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
