function createTicks() {
      const ticksContainer = document.getElementById('ticks');
      const clockRadius = 120; // Half of 300px clock container
      const tickOffset = 8; // To push ticks slightly outside border

      for (let i = 0; i < 60; i++) {
        const tick = document.createElement('div');

        // Size of tick: longer and thicker for hour marks (every 5 ticks)
        const isHourTick = i % 5 === 0;
        tick.style.width = isHourTick ? '4px' : '4px';
        tick.style.height = isHourTick ? '10px' : "0px";

        // Position the tick at the edge of the clock radius minus offset
        // The tick origin is center bottom, so translateY by negative (radius - offset)
        tick.style.transform = `rotate(${i * 6}deg) translateY(-${clockRadius - tickOffset}px)`;

        ticksContainer.appendChild(tick);
      }
    }

    createTicks();

    function updateClock() {
      const now = new Date();

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours() % 12;

      const secondDeg = seconds * 6;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const hourDeg = hours * 30 + minutes * 0.5;

      document.getElementById('second').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
      document.getElementById('minute').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
      document.getElementById('hour').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();