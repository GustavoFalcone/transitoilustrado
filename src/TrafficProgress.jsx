import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function TrafficProgress() {
  const slot = useRef(null);
  const [progress, setProgress] = useState({ stage: 0, floating: false, hidden: false });

  useEffect(() => {
    const section = slot.current.closest('[data-section="signal"]');
    const finish = document.querySelector('[data-section="guarantee"]');
    let frame = 0;
    const measure = () => {
      const line = window.innerHeight * 0.45;
      const bounds = section.getBoundingClientRect();
      const next = {
        stage: bounds.bottom <= line ? 2 : bounds.top <= line ? 1 : 0,
        floating: slot.current.getBoundingClientRect().bottom < 65,
        hidden: finish.getBoundingClientRect().top <= line,
      };
      setProgress(previous => previous.stage === next.stage && previous.floating === next.floating && previous.hidden === next.hidden ? previous : next);
    };
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; measure(); });
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.querySelector('main'));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  const { stage, floating, hidden } = progress;
  const color = ['vermelha', 'amarela', 'verde'][stage];
  const signal = <div className={`lpSignal ${floating ? 'lpSignal--floating' : ''} ${hidden ? 'lpSignal--hidden' : ''}`} data-stage={stage} role="img" aria-label={`Progresso da leitura: etapa ${stage + 1} de 3, luz ${color} ativa.`} aria-hidden={hidden || undefined}>
      <div className="lpSignalHousing">
        <span className="lpSignalBolt lpSignalBolt--top" aria-hidden="true" />
        {['red', 'yellow', 'green'].map((light, index) => <span key={light} className={`lpSignalSocket lpSignalSocket--${light} ${index === stage ? 'lpSignalSocket--active' : ''}`} aria-hidden="true"><span className="lpSignalLens" /></span>)}
        <span className="lpSignalBolt lpSignalBolt--bottom" aria-hidden="true" />
      </div>
    </div>;
  return <div ref={slot} className="lpSignalSlot">{floating ? createPortal(signal, document.body) : signal}</div>;
}
