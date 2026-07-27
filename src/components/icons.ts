/**
 * Inline-SVG-Pfade des hauseigenen Icon-Sets.
 * Einheitliches 24×24-Raster, Strichstärke 1.6, runde Enden.
 * Bewusst selbst gezeichnet: keine externen Requests, keine Lizenzfragen.
 */

export const ICON_PATHS = {
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  'arrow-right': '<path d="M4 12h15m-6-7 7 7-7 7"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/>',
  phone:
    '<path d="M6.6 3.5h3l1.5 4-2 1.4a13 13 0 0 0 6 6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"/>',
  mobile: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6.5 9 6 9-6"/>',
  fax: '<path d="M7 8V3.5h10V8"/><rect x="2.5" y="8" width="19" height="8" rx="2"/><path d="M7 16h10v4.5H7z"/>',
  'map-pin':
    '<path d="M12 21c4-4.6 6-8 6-10.8A6 6 0 0 0 6 10.2C6 13 8 16.4 12 21Z"/><circle cx="12" cy="10.2" r="2.3"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  'chevron-down': '<path d="m5 9 7 7 7-7"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  speech:
    '<path d="M3.5 6.5A2.5 2.5 0 0 1 6 4h7a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 13 13H8l-4.5 3.5Z"/><path d="M18 9h.5A2.5 2.5 0 0 1 21 11.5v4a2.5 2.5 0 0 1-2.5 2.5H18l-3 2.5V18"/>',
  conference:
    '<path d="M12 3v4"/><circle cx="12" cy="9.5" r="2.5"/><path d="M5.5 21v-2a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2"/><path d="M4 8.5A9 9 0 0 1 6.5 4M20 8.5A9 9 0 0 0 17.5 4"/>',
  certificate:
    '<path d="M6 3.5h9l3.5 3.5v7.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/><path d="M14.5 3.5V7H18"/><circle cx="11" cy="18.5" r="2.5"/><path d="m9 20.5-.5 3 2.5-1.4 2.5 1.4-.5-3"/>',
  scales:
    '<path d="M12 3.5v17M6 20.5h12"/><path d="M12 6.5 5 8.5m7-2 7 2"/><path d="M5 8.5 2.5 14a2.5 2.5 0 0 0 5 0Zm14 0L16.5 14a2.5 2.5 0 0 0 5 0Z"/>',
  accompany:
    '<circle cx="8" cy="6.5" r="2.5"/><circle cx="16" cy="6.5" r="2.5"/><path d="M3.5 20.5v-2a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2M13 20.5v-2a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v2"/>',
  document:
    '<path d="M6.5 3.5h7L18 8v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1.5-1.5Z"/><path d="M13 3.5V8h4.5M8.5 12.5h6M8.5 16.5h6"/>',
  health:
    '<path d="M12 20.5s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 8a4.4 4.4 0 0 1 7.5 2.9c0 5-7.5 9.6-7.5 9.6Z"/><path d="M12 11v4M10 13h4"/>',
  migration:
    '<circle cx="12" cy="12" r="9"/><path d="M3.5 10h17M4.5 15h15"/><path d="m14 6 4 3-4 3"/>',
  government:
    '<path d="M3.5 20.5h17M4.5 20.5V10m5 10.5V10m5 10.5V10m5 10.5V10"/><path d="M2.5 10 12 4l9.5 6"/>',
  industry:
    '<path d="M3.5 20.5V11l5.5 3.5V11l5.5 3.5V11l5.5 3.5v6Z"/><path d="M4 11 5 3.5h3L9 11"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3m0 13v3M2.5 12h3m13 0h3M5.2 5.2l2.1 2.1m9.4 9.4 2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"/>',
  shield:
    '<path d="M12 3 5 5.8v5.6c0 4.2 2.9 7.9 7 9.6 4.1-1.7 7-5.4 7-9.6V5.8Z"/><path d="m9 12 2 2 4-4"/>',
  balance: '<path d="M12 4v16M7 8h10M5 20h14"/><circle cx="12" cy="4" r="1.5"/>',
  lock: '<rect x="4.5" y="10" width="15" height="10.5" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6.5V12l3.5 2.5"/>',
  police:
    '<path d="M12 3 5.5 5.5v5.3c0 4 2.7 7.6 6.5 9.2 3.8-1.6 6.5-5.2 6.5-9.2V5.5Z"/><path d="m12 8 1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4Z"/>',
  building:
    '<rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/><path d="M8 7.5h3M13 7.5h3M8 11.5h3M13 11.5h3M10 20.5v-4h4v4"/>',
  'home-shelter':
    '<path d="m3.5 10.5 8.5-6.5 8.5 6.5"/><path d="M6 9.5v11h12v-11"/><path d="M10 20.5v-5h4v5"/>',
  school:
    '<path d="m12 4 9.5 4.5L12 13 2.5 8.5Z"/><path d="M6.5 10.7V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-5.3"/>',
  europe:
    '<circle cx="12" cy="12" r="9"/><path d="m12 6.2.9 2.3 2.4.2-1.8 1.6.6 2.4-2.1-1.3-2.1 1.3.6-2.4-1.8-1.6 2.4-.2Z"/><path d="M6.5 15.5h11"/>',
  handshake:
    '<path d="m8 12.5 2.5-2.5a2 2 0 0 1 2.8 0l4.2 4.2"/><path d="m3 10.5 3.5-3.5 4 4-2.5 2.5a1.8 1.8 0 0 1-2.5 0Z"/><path d="M21 10.5 17.5 7l-3 3"/><path d="m13 16 1.5 1.5m-4-3.5 1.5 1.5"/>',
  briefcase:
    '<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M9 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5v2M3 12.5h18"/>',
  users:
    '<circle cx="9" cy="8" r="3"/><path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3A4.5 4.5 0 0 1 15 18.5V20"/><path d="M16 5.3a3 3 0 0 1 0 5.4M18 14.2a4.5 4.5 0 0 1 3 4.3V20"/>',
  presentation:
    '<rect x="3" y="4" width="18" height="11" rx="1.5"/><path d="M12 15v3M8.5 21l3.5-3 3.5 3M8 11l2.5-2.5L13 11l3-3.5"/>',
  truck:
    '<path d="M3 6.5h11v9H3z"/><path d="M14 9.5h3.5l3 3v3H14z"/><circle cx="7" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
  video:
    '<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="m15.5 10.5 6-3v9l-6-3z"/>',
} as const;

export type IconName = keyof typeof ICON_PATHS;
