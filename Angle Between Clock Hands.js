/*
DESCRIPTION:
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in radians.

Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
*/
function handAngle(date) {
  const dataTime = new Date(date);
  const hours = dataTime.getUTCHours();
  const minutes = dataTime.getUTCMinutes();

  const hoursDegree = 360 / 12;
  const minutesDegree = 360 / 60;

  const hoursAngle = (hours + minutes / 60) * hoursDegree;
  const minutesAngle = minutes * minutesDegree;

  const finalDegree = Math.abs(
    (hoursAngle === 360 ? 0 : hoursAngle) - minutesAngle
  );

  const result = Math.abs(
    ((finalDegree > 180 ? 360 - finalDegree : finalDegree) * Math.PI) / 180
  );

  return result;

  //   const pi2 = Math.PI * 2;
  //   const m = date.getMinutes() / 60,
  //     h = (date.getHours() + m) / 12;

  //   const angle = Math.abs(h - m) * pi2;
  //   return Math.min(angle, pi2 - angle);
  ///////////////////////////////////////////////
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();

  //   let nook1 = Math.abs((hours + minutes / 60) * 30 - minutes * 6);
  //   let nook2 = Math.abs(minutes * 6 - (hours + minutes / 60) * 30);

  //   let output = (Math.min(360 - nook1, nook2) * Math.PI) / 180;

  //   return output;
}
