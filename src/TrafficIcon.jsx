const drawings = {
  steering: <><circle cx="32" cy="32" r="21"/><circle cx="32" cy="32" r="6"/><path d="M12 30h14m12 0h14M32 38v15m-17-25c5-8 29-8 34 0"/></>,
  license: <><rect x="9" y="16" width="46" height="32" rx="5"/><circle cx="23" cy="30" r="6"/><path d="M14 42c2-6 16-6 18 0m7-15h10m-10 8h10m-10 8h7"/></>,
  shield: <><path d="M32 8 51 16v15c0 12-8 20-19 25-11-5-19-13-19-25V16L32 8Z"/><path d="m23 32 6 6 13-14"/></>,
  briefcase: <><rect x="10" y="23" width="44" height="30" rx="5"/><path d="M23 23v-6c0-3 2-5 5-5h8c3 0 5 2 5 5v6M10 35c12 7 32 7 44 0M29 36h6"/></>,
  eye: <><path d="M6 32s10-15 26-15 26 15 26 15-10 15-26 15S6 32 6 32Z"/><circle cx="32" cy="32" r="8"/></>,
  road: <><path d="M20 8 9 56m35-48 11 48M32 9v10m0 9v10m0 9v8M13 48h38"/></>,
  file: <><path d="M16 8h24l9 9v39H16V8Z"/><path d="M40 8v11h9M23 29h19M23 37h19M23 45h13"/></>,
  mail: <><rect x="8" y="17" width="48" height="31" rx="5"/><path d="m10 20 22 17 22-17M10 46l16-14m28 14L38 32"/></>,
  clock: <><circle cx="32" cy="32" r="24"/><path d="M32 17v16l11 7"/></>,
  junction: <><path d="M31 55V35c0-9-6-13-16-13m18 33V34c0-8 5-14 16-16M11 22h9m-6-5-5 5 5 5m35-9h-9m6-5 5 5-5 5"/></>,
  layers: <><path d="m32 10 24 13-24 13L8 23 32 10Zm-24 23 24 13 24-13M8 43l24 13 24-13"/></>,
  search: <><circle cx="27" cy="27" r="17"/><path d="m40 40 15 15M20 27h14m-7-7v14"/></>
};

export default function TrafficIcon({ name, className = "" }) {
  return <svg className={`trafficIcon ${className}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawings[name] || drawings.road}</svg>;
}
