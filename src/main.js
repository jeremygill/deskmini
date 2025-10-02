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

            if (platform.includes('cisco')) {
              // ✅ Cisco platform detected
              console.log('Cisco platform detected. Macro on device should handle the panel click.');
              // No action needed here — macro will respond to panel click
            } else {
              // ✅ Windows platform
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
