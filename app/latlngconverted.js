function utmToLatLong(
  altitude,
  latitude,
  zoneNumber,
  northernHemisphere = true
) {
  if (!northernHemisphere) {
    latitude = 10000000 - latitude;
  }

  let a = 6378137.0; // Radio ecuatorial de la Tierra
  let e = 0.081819191; // Excentricidad de la Tierra
  let e1sq = 0.006739497; // e^2 / (1 - e^2)
  let k0 = 0.9996; // Factor de escala

  let arc = latitude / k0;
  let mu =
    arc /
    (a *
      (1 -
        Math.pow(e, 2) / 4.0 -
        (3 * Math.pow(e, 4)) / 64.0 -
        (5 * Math.pow(e, 6)) / 256.0));

  let ei =
    (1 - Math.pow(1 - e * e, 1 / 2.0)) / (1 + Math.pow(1 - e * e, 1 / 2.0));

  let ca = (3 * ei) / 2 - (27 * Math.pow(ei, 3)) / 32.0;

  let cb = (21 * Math.pow(ei, 2)) / 16 - (55 * Math.pow(ei, 4)) / 32;
  let cc = (151 * Math.pow(ei, 3)) / 96;
  let cd = (1097 * Math.pow(ei, 4)) / 512;
  let phi1 =
    mu +
    ca * Math.sin(2 * mu) +
    cb * Math.sin(4 * mu) +
    cc * Math.sin(6 * mu) +
    cd * Math.sin(8 * mu);

  let n0 = a / Math.pow(1 - Math.pow(e * Math.sin(phi1), 2), 1 / 2.0);

  let r0 =
    (a * (1 - e * e)) / Math.pow(1 - Math.pow(e * Math.sin(phi1), 2), 3 / 2.0);
  let fact1 = (n0 * Math.tan(phi1)) / r0;

  let _a1 = 500000 - altitude;
  let dd0 = _a1 / (n0 * k0);
  let fact2 = (dd0 * dd0) / 2;

  let t0 = Math.pow(Math.tan(phi1), 2);
  let Q0 = e1sq * Math.pow(Math.cos(phi1), 2);
  let fact3 =
    ((5 + 3 * t0 + 10 * Q0 - 4 * Q0 * Q0 - 9 * e1sq) * Math.pow(dd0, 4)) / 24;

  let fact4 =
    ((61 + 90 * t0 + 298 * Q0 + 45 * t0 * t0 - 252 * e1sq - 3 * Q0 * Q0) *
      Math.pow(dd0, 6)) /
    720;

  let lof1 = _a1 / (n0 * k0);
  let lof2 = ((1 + 2 * t0 + Q0) * Math.pow(dd0, 3)) / 6.0;
  let lof3 =
    ((5 -
      2 * Q0 +
      28 * t0 -
      3 * Math.pow(Q0, 2) +
      8 * e1sq +
      24 * Math.pow(t0, 2)) *
      Math.pow(dd0, 5)) /
    120;
  let _a2 = (lof1 - lof2 + lof3) / Math.cos(phi1);
  let _a3 = (_a2 * 180) / Math.PI;

  let latitudeResult =
    (180 * (phi1 - fact1 * (fact2 + fact3 + fact4))) / Math.PI;

  if (!northernHemisphere) {
    latitudeResult = -latitudeResult;
  }

  let longitudeResult = (zoneNumber > 0 ? 6 * zoneNumber - 183.0 : 3.0) - _a3;

  return { latitude: latitudeResult, longitude: longitudeResult };
}
