function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    dialNumber: 'erica.talking@ivr.vc',
    services: [],
     
    init() {
      const params = new URLSearchParams(location.search);
      if (params.has('number')) {
        this.dialNumber = params.get('number');
      }
      this.services = [
        { url: this.dialNumber, name: 'Call IT Support' },       
      ];

      import xapi from 'xapi';

document.addEventListener('DOMContentLoaded', () => {
  const callITButton = document.getElementById('CallIT');

  if (callITButton) {
    callITButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default SIP dial behavior

      xapi.Command.WebRTC.Join({
        BookingId: 'TeamsMeeting_4882312564533',
        Title: 'Techbar UniSC Sunshine Coast',
        TrackingData: 'WebrtcJoin_command',
        Type: 'MSTeams',
        Url: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjkzYWVjOWMtNTRhMy00MjgyLWEwZjAtOTM0MTgxM2RhNmMw%40thread.v2/0?context=%7b%22Tid%22%3a%2293b0ec50-fc3f-47ed-9345-9ffc6012541c%22%2c%22Oid%22%3a%22f4191fbd-c7c1-4fa0-8679-d380e280aebf%22%7d'
      });
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


