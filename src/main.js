(function () {
  function setup() {
    Alpine.store('model', {
      // State
      currentPage: 'home',                 // 'home' | 'service' | 'instructions'
      currentLanguage: 'english',
      languages: ['english', 'norwegian'],

      // Instructions content (shown on instructions page)
      instructions: [
        'Step 1: Open the application.',
        'Step 2: Navigate to the settings menu.',
        'Step 3: Select the desired configuration.',
        'Step 4: Save and exit.',
      ],

      // Lifecycle
      init: function () {
        // Reserved for any setup (e.g., reading URL params)
      },

      // Actions
      callIT: function () {
        var args = {
          BookingId: 'TeamsMeeting_4882312564533',
          Title: 'Techbar UniSC Sunshine Coast',
          TrackingData: 'WebrtcJoin_command',
          Type: 'MSTeams',
          Url: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjkzYWVjOWMtNTRhMy00MjgyLWEwZjAtOTM0MTgxM2RhNmMw%40thread.v2/0?context=%7b%22Tid%22%3a%2293b0ec50-fc3f-47ed-9345-9ffc6012541c%22%2c%22Oid%22%3a%22f4191fbd-c7c1-4fa0-8679-d380e280aebf%22%7d'
        };

        try {
          var api = window.xapi || window.XAPI || null;

          // Device Macro-style binding
          if (api && api.Command && api.Command.WebRTC && typeof api.Command.WebRTC.Join === 'function') {
            api.Command.WebRTC.Join(args);
            return;
          }

          // WebEngine browser binding
          if (api && typeof api.command === 'function') {
            api.command('WebRTC Join', args);
            return;
          }

          // Fallback for non-device testing
          window.open(args.Url, '_blank');
        } catch (e) {
          try { console.error('Failed to start WebRTC Join:', e); } catch(_) {}
          alert('Unable to start the call on this device. Please try again.');
        }
      },

      // Reactive accessors
      get page() { return this.currentPage; },
      set page(next) { this.currentPage = next; },

      get language() { return this.currentLanguage; },
      set language(val) { this.currentLanguage = val; },
    });
  }

  // Register the store whether Alpine is already present or not
  if (window.Alpine) {
    setup();
  } else {
    document.addEventListener('alpine:init', setup);
  }
})();
