import xapi from 'xapi';

// Listen for button press
xapi.Event.UserInterface.Extensions.Panel.Clicked.on((event) => {
  if (event.PanelId === 'CallIT') {
     
     //xapi.Command.Dial({ Number: 'jgill@usc.edu.au'});
         
    
xapi.Command.WebRTC.Join({
  BookingId: 'TeamsMeeting_4882312564533',
  Title: 'Techbar UniSC Sunshine Coast',
  TrackingData: 'WebrtcJoin_command',
  Type: 'MSTeams',
  Url: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjkzYWVjOWMtNTRhMy00MjgyLWEwZjAtOTM0MTgxM2RhNmMw%40thread.v2/0?context=%7b%22Tid%22%3a%2293b0ec50-fc3f-47ed-9345-9ffc6012541c%22%2c%22Oid%22%3a%22f4191fbd-c7c1-4fa0-8679-d380e280aebf%22%7d'
});

  }
});
