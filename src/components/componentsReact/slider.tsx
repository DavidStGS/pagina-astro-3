import { useEffect } from "react";
import "./index.css";

export default function ScrollerComponent() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner = scroller.querySelector(".scroller__inner");

        if (scrollerInner !== null) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
    addAnimation();
  }, []); // Solo se ejecuta una vez
  return (
    <>
      <div
        className="flex w-full overflow-x-hidden [--gap:1rem] [--duration:40s] pt-20 scroller"
        data-speed="fast"
      >
        <div className="flex w-max animate-marquee items-stretch gap-[--gap] [animation-direction:reverse] hover:[animation-play-state:paused] scroller__inner">
          <a
            href="https://platzi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
              <img
                src="/platzi.webp"
                alt="Logo de Platzi"
                className="w-full h-auto"
              />
            </div>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
              <svg
                viewBox="0 0 550 139"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M70.49 0C31.51 0 0 31.74 0 71.02C0 102.41 20.19 128.98 48.2 138.39C51.7 139.1 52.98 136.86 52.98 134.98C52.98 133.33 52.86 127.69 52.86 121.81C33.25 126.04 29.17 113.34 29.17 113.34C26.02 105.11 21.35 102.99 21.35 102.99C14.93 98.64 21.82 98.64 21.82 98.64C28.94 99.11 32.67 105.93 32.67 105.93C38.97 116.75 49.12 113.69 53.21 111.81C53.79 107.22 55.66 104.05 57.65 102.29C42.01 100.64 25.56 94.53 25.56 67.25C25.56 59.49 28.36 53.14 32.79 48.2C32.09 46.44 29.64 39.15 33.49 29.39C33.49 29.39 39.44 27.51 52.86 36.68C58.61 35.13 64.53 34.33 70.48 34.33C76.43 34.33 82.5 35.15 88.1 36.68C101.52 27.51 107.47 29.39 107.47 29.39C111.32 39.15 108.87 46.44 108.17 48.2C112.72 53.14 115.41 59.49 115.41 67.25C115.41 94.53 98.96 100.52 83.2 102.29C85.77 104.52 87.98 108.76 87.98 115.46C87.98 124.98 87.86 132.63 87.86 134.98C87.86 136.86 89.14 139.1 92.64 138.39C120.65 128.98 140.84 102.41 140.84 71.02C140.98 31.74 109.36 0 70.49 0Z"
                  fill="white"
                ></path>
                <path
                  d="M258.29 66.66H228.02C227.24 66.66 226.61 67.29 226.61 68.07V82.87C226.61 83.65 227.24 84.29 228.02 84.29H239.83V102.68C239.83 102.68 237.18 103.58 229.85 103.58C221.2 103.58 209.12 100.42 209.12 73.86C209.12 47.3 221.7 43.8 233.51 43.8C243.73 43.8 248.14 45.6 250.94 46.47C251.82 46.74 252.63 45.86 252.63 45.08L256.01 30.78C256.01 30.41 255.89 29.97 255.47 29.68C254.33 28.87 247.39 24.98 229.85 24.98C209.64 24.98 188.92 33.58 188.92 74.9C188.92 116.22 212.65 122.38 232.65 122.38C249.21 122.38 259.25 115.3 259.25 115.3C259.66 115.07 259.71 114.49 259.71 114.23V68.08C259.71 67.3 259.08 66.67 258.3 66.67L258.29 66.66Z"
                  fill="white"
                ></path>
                <path
                  d="M414.27 29.92C414.27 29.13 413.65 28.5 412.87 28.5H395.83C395.05 28.5 394.42 29.14 394.42 29.92V62.85H367.86V29.92C367.86 29.13 367.23 28.5 366.45 28.5H349.41C348.63 28.5 348 29.14 348 29.92V119.09C348 119.88 348.63 120.52 349.41 120.52H366.45C367.23 120.52 367.86 119.88 367.86 119.09V80.95H394.42L394.37 119.09C394.37 119.88 395 120.52 395.78 120.52H412.86C413.64 120.52 414.26 119.88 414.27 119.09V29.92Z"
                  fill="white"
                ></path>
                <path
                  d="M290.45 41.62C290.45 35.48 285.53 30.52 279.46 30.52C273.39 30.52 268.47 35.48 268.47 41.62C268.47 47.76 273.39 52.72 279.46 52.72C285.53 52.72 290.45 47.75 290.45 41.62Z"
                  fill="white"
                ></path>
                <path
                  d="M289.23 100.28V59.12C289.23 58.34 288.6 57.7 287.82 57.7H270.83C270.05 57.7 269.35 58.5 269.35 59.29V118.27C269.35 120 270.43 120.52 271.83 120.52H287.14C288.82 120.52 289.23 119.7 289.23 118.24V100.29V100.28Z"
                  fill="white"
                ></path>
                <path
                  d="M479.04 57.83H462.13C461.35 57.83 460.72 58.47 460.72 59.26V102.99C460.72 102.99 456.42 106.13 450.33 106.13C444.24 106.13 442.61 103.36 442.61 97.39V59.26C442.61 58.47 441.98 57.83 441.2 57.83H424.04C423.27 57.83 422.63 58.47 422.63 59.26V100.28C422.63 118.01 432.51 122.35 446.11 122.35C457.26 122.35 466.26 116.19 466.26 116.19C466.26 116.19 466.69 119.44 466.88 119.82C467.07 120.2 467.58 120.59 468.12 120.59L479.04 120.54C479.81 120.54 480.45 119.9 480.45 119.12V59.26C480.45 58.47 479.81 57.83 479.03 57.83H479.04Z"
                  fill="white"
                ></path>
                <path
                  d="M525.26 55.83C515.65 55.83 509.12 60.12 509.12 60.12V29.92C509.12 29.13 508.49 28.5 507.71 28.5H490.62C489.84 28.5 489.21 29.14 489.21 29.92V119.09C489.21 119.88 489.84 120.52 490.62 120.52H502.48C503.01 120.52 503.42 120.24 503.72 119.76C504.01 119.28 504.44 115.65 504.44 115.65C504.44 115.65 511.43 122.27 524.66 122.27C540.19 122.27 549.1 114.39 549.1 86.9C549.1 59.41 534.87 55.82 525.26 55.82V55.83ZM518.59 106.07C512.72 105.89 508.75 103.23 508.75 103.23V74.99C508.75 74.99 512.67 72.58 517.49 72.15C523.58 71.6 529.45 73.44 529.45 87.97C529.45 103.29 526.8 106.31 518.6 106.07H518.59Z"
                  fill="white"
                ></path>
                <path
                  d="M338.21 57.69H325.43C325.43 57.69 325.41 40.81 325.41 40.8C325.41 40.16 325.08 39.84 324.34 39.84H306.92C306.24 39.84 305.88 40.14 305.88 40.79V58.24C305.88 58.24 297.15 60.35 296.56 60.52C295.97 60.69 295.54 61.23 295.54 61.88V72.85C295.54 73.64 296.17 74.27 296.95 74.27H305.88V100.65C305.88 120.25 319.63 122.17 328.9 122.17C333.14 122.17 338.21 120.81 339.05 120.5C339.56 120.31 339.85 119.79 339.85 119.22V107.16C339.86 106.37 339.2 105.74 338.45 105.74C337.7 105.74 335.8 106.04 333.84 106.04C327.56 106.04 325.43 103.12 325.43 99.34C325.43 95.56 325.43 74.27 325.43 74.27H338.21C338.99 74.27 339.62 73.63 339.62 72.85V59.11C339.62 58.32 338.99 57.69 338.21 57.69Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://midu.link/autentia"
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
              <img
                className="w-auto h-full py-20"
                src="/autentia.webp"
                alt="logo de Autentia"
              />
            </div>
          </a>
          <a
            href="https://platzi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
              <img
                src="/platzi.webp"
                alt="Logo de Platzi"
                className="w-full h-auto"
              />
            </div>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
              <svg
                viewBox="0 0 550 139"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M70.49 0C31.51 0 0 31.74 0 71.02C0 102.41 20.19 128.98 48.2 138.39C51.7 139.1 52.98 136.86 52.98 134.98C52.98 133.33 52.86 127.69 52.86 121.81C33.25 126.04 29.17 113.34 29.17 113.34C26.02 105.11 21.35 102.99 21.35 102.99C14.93 98.64 21.82 98.64 21.82 98.64C28.94 99.11 32.67 105.93 32.67 105.93C38.97 116.75 49.12 113.69 53.21 111.81C53.79 107.22 55.66 104.05 57.65 102.29C42.01 100.64 25.56 94.53 25.56 67.25C25.56 59.49 28.36 53.14 32.79 48.2C32.09 46.44 29.64 39.15 33.49 29.39C33.49 29.39 39.44 27.51 52.86 36.68C58.61 35.13 64.53 34.33 70.48 34.33C76.43 34.33 82.5 35.15 88.1 36.68C101.52 27.51 107.47 29.39 107.47 29.39C111.32 39.15 108.87 46.44 108.17 48.2C112.72 53.14 115.41 59.49 115.41 67.25C115.41 94.53 98.96 100.52 83.2 102.29C85.77 104.52 87.98 108.76 87.98 115.46C87.98 124.98 87.86 132.63 87.86 134.98C87.86 136.86 89.14 139.1 92.64 138.39C120.65 128.98 140.84 102.41 140.84 71.02C140.98 31.74 109.36 0 70.49 0Z"
                  fill="white"
                ></path>
                <path
                  d="M258.29 66.66H228.02C227.24 66.66 226.61 67.29 226.61 68.07V82.87C226.61 83.65 227.24 84.29 228.02 84.29H239.83V102.68C239.83 102.68 237.18 103.58 229.85 103.58C221.2 103.58 209.12 100.42 209.12 73.86C209.12 47.3 221.7 43.8 233.51 43.8C243.73 43.8 248.14 45.6 250.94 46.47C251.82 46.74 252.63 45.86 252.63 45.08L256.01 30.78C256.01 30.41 255.89 29.97 255.47 29.68C254.33 28.87 247.39 24.98 229.85 24.98C209.64 24.98 188.92 33.58 188.92 74.9C188.92 116.22 212.65 122.38 232.65 122.38C249.21 122.38 259.25 115.3 259.25 115.3C259.66 115.07 259.71 114.49 259.71 114.23V68.08C259.71 67.3 259.08 66.67 258.3 66.67L258.29 66.66Z"
                  fill="white"
                ></path>
                <path
                  d="M414.27 29.92C414.27 29.13 413.65 28.5 412.87 28.5H395.83C395.05 28.5 394.42 29.14 394.42 29.92V62.85H367.86V29.92C367.86 29.13 367.23 28.5 366.45 28.5H349.41C348.63 28.5 348 29.14 348 29.92V119.09C348 119.88 348.63 120.52 349.41 120.52H366.45C367.23 120.52 367.86 119.88 367.86 119.09V80.95H394.42L394.37 119.09C394.37 119.88 395 120.52 395.78 120.52H412.86C413.64 120.52 414.26 119.88 414.27 119.09V29.92Z"
                  fill="white"
                ></path>
                <path
                  d="M290.45 41.62C290.45 35.48 285.53 30.52 279.46 30.52C273.39 30.52 268.47 35.48 268.47 41.62C268.47 47.76 273.39 52.72 279.46 52.72C285.53 52.72 290.45 47.75 290.45 41.62Z"
                  fill="white"
                ></path>
                <path
                  d="M289.23 100.28V59.12C289.23 58.34 288.6 57.7 287.82 57.7H270.83C270.05 57.7 269.35 58.5 269.35 59.29V118.27C269.35 120 270.43 120.52 271.83 120.52H287.14C288.82 120.52 289.23 119.7 289.23 118.24V100.29V100.28Z"
                  fill="white"
                ></path>
                <path
                  d="M479.04 57.83H462.13C461.35 57.83 460.72 58.47 460.72 59.26V102.99C460.72 102.99 456.42 106.13 450.33 106.13C444.24 106.13 442.61 103.36 442.61 97.39V59.26C442.61 58.47 441.98 57.83 441.2 57.83H424.04C423.27 57.83 422.63 58.47 422.63 59.26V100.28C422.63 118.01 432.51 122.35 446.11 122.35C457.26 122.35 466.26 116.19 466.26 116.19C466.26 116.19 466.69 119.44 466.88 119.82C467.07 120.2 467.58 120.59 468.12 120.59L479.04 120.54C479.81 120.54 480.45 119.9 480.45 119.12V59.26C480.45 58.47 479.81 57.83 479.03 57.83H479.04Z"
                  fill="white"
                ></path>
                <path
                  d="M525.26 55.83C515.65 55.83 509.12 60.12 509.12 60.12V29.92C509.12 29.13 508.49 28.5 507.71 28.5H490.62C489.84 28.5 489.21 29.14 489.21 29.92V119.09C489.21 119.88 489.84 120.52 490.62 120.52H502.48C503.01 120.52 503.42 120.24 503.72 119.76C504.01 119.28 504.44 115.65 504.44 115.65C504.44 115.65 511.43 122.27 524.66 122.27C540.19 122.27 549.1 114.39 549.1 86.9C549.1 59.41 534.87 55.82 525.26 55.82V55.83ZM518.59 106.07C512.72 105.89 508.75 103.23 508.75 103.23V74.99C508.75 74.99 512.67 72.58 517.49 72.15C523.58 71.6 529.45 73.44 529.45 87.97C529.45 103.29 526.8 106.31 518.6 106.07H518.59Z"
                  fill="white"
                ></path>
                <path
                  d="M338.21 57.69H325.43C325.43 57.69 325.41 40.81 325.41 40.8C325.41 40.16 325.08 39.84 324.34 39.84H306.92C306.24 39.84 305.88 40.14 305.88 40.79V58.24C305.88 58.24 297.15 60.35 296.56 60.52C295.97 60.69 295.54 61.23 295.54 61.88V72.85C295.54 73.64 296.17 74.27 296.95 74.27H305.88V100.65C305.88 120.25 319.63 122.17 328.9 122.17C333.14 122.17 338.21 120.81 339.05 120.5C339.56 120.31 339.85 119.79 339.85 119.22V107.16C339.86 106.37 339.2 105.74 338.45 105.74C337.7 105.74 335.8 106.04 333.84 106.04C327.56 106.04 325.43 103.12 325.43 99.34C325.43 95.56 325.43 74.27 325.43 74.27H338.21C338.99 74.27 339.62 73.63 339.62 72.85V59.11C339.62 58.32 338.99 57.69 338.21 57.69Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://midu.link/autentia"
            target="_blank"
            rel="noopener noreferrer"
            className="relative min-w-[50px] border-slate-900 hover:border-slate-900/75 flex justify-center items-center overflow-hidden rounded-xl border bg-slate-800/50 w-full py-4 h-24 px-12 transition hover:bg-slate-800/75 hover:shadow-lg group"
          >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
              <img
                className="w-auto h-full py-20"
                src="/autentia.webp"
                alt="logo de Autentia"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
