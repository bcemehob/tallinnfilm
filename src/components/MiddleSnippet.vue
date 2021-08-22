<template>
  <div class="snippet-main-wrap">
    <div class="snippet-wrap">
      <div class="snippet">
        <h1 data-text="Tallinnfilm"><span>Tallinnfilm</span></h1>
      </div>
      <svg class="effect" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>


          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>
    </div>
  </div>

</template>

<script>
export default {
  name: "MiddleSnippet"
}
</script>

<style lang="scss" scoped>
.snippet-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.snippet {
  width: 200vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-color: #000;*/
  background-color: transparent;
  overflow: hidden;
  font-family: 'Amatic SC', sans-serif;
  font-size: 100px;

}

.effect {
  width: 0;
}
h1 {
  position: relative;
  font-size: calc(20px + 5vw);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-shadow: 0 0 0.15em #1da9cc;
  user-select: none;
  white-space: nowrap;
  filter: blur(0.007em);
  -webkit-animation: squiggly-anim 0.34s linear infinite;
  animation: squiggly-anim 0.34s linear infinite;

  /*animation: shake 2.5s linear infinite;*/
}

h1 span {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

h1::before,
h1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}
@keyframes shake {
  5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {
    filter: blur(0.018em);
    transform: translateY(0.018em) rotate(0deg);
  }

  10%, 30%, 40%, 50%, 70%, 80%, 90% {
    filter: blur(0.01em);
    transform: translateY(-0.018em) rotate(0deg);
  }

  20%, 60% {
    filter: blur(0.03em);
    transform: translate(-0.018em, 0.018em) rotate(0deg);
  }

  45%, 85% {
    filter: blur(0.03em);
    transform: translate(0.018em, -0.018em) rotate(0deg);
  }

  100% {
    filter: blur(0.007em);
    transform: translate(0) rotate(-0.5deg);
  }
}

@-webkit-keyframes squiggly-anim {
  0% {
    filter: url("#squiggly-0");
  }
  25% {
    filter: url("#squiggly-1");
  }
  50% {
    filter: url("#squiggly-2");
  }
  75% {
    filter: url("#squiggly-3");
  }
  100% {
    filter: url("#squiggly-4");
  }
}

@keyframes squiggly-anim {
  0% {
    filter: url("#squiggly-0");
  }
  25% {
    filter: url("#squiggly-1");
  }
  50% {
    filter: url("#squiggly-2");
  }
  75% {
    filter: url("#squiggly-3");
  }
  100% {
    filter: url("#squiggly-4");
  }
}
</style>