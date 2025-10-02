function triggerCiscoJoin() {
  fetch('https://<cisco-device-ip>/putxml', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa('admin:yourpassword'), // Replace with actual credentials
      'Content-Type': 'text/xml'
    },
    body: `
      <Command>
        <WebRTC>
          <Join>
            <BookingId>TeamsMeeting_4882312564533</BookingId>
            <Title>Techbar UniSC Sunshine Coast</Title>
            <TrackingData>WebrtcJoin_command</TrackingData>
            <Type>MSTeams</Type>
            <Url>https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjkzYWVjOWMtNTRhMy00MjgyLWEwZjAtOTM0MTgxM2RhNmMw%40thread.v2/0?context=%7b%22Tid%22%3a%2293b0ec50-fc3f-47ed-9345-9ffc6012541c%22%2c%22Oid%22%3a%22f4191fbd-c7c1-4fa0-8679-d380e280aebf%22%7d</Url>
          </Join>
        </WebRTC>
      </Command>
    `
  })
  .then(response => {
    if (response.ok) {
      console.log('Cisco WebRTC Join triggered successfully.');
    } else {
      console.error('Failed to trigger Cisco WebRTC Join.');
    }
  })
  .catch(error => {
    console.error('Error sending request to Cisco device:', error);
  });
}
