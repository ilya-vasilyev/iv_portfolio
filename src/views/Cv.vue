<template>
  <main class="cv">
    <h1>Ilya Vasilyev</h1>
    <section>
      <p>
        Frontend developer, specialized in Vue.js, visualization, animation, and interactivity, with entrepreneurial experience and motion design skills.
      </p>
      <p class="contacts">
        <a
          href="https://ilya.aivi.dev"
          rel="noreferrer"
          target="_blank"
        >Website</a>
        <a
          href="https://github.com/ilya-vasilyev"
          rel="noreferrer"
          target="_blank"
        >GitHub</a>
        <a
          href="https://www.linkedin.com/in/ilya-vasilyev-71a12675/"
          rel="noreferrer"
          target="_blank"
        >LinkedIn</a>
        <a
          href="https://www.facebook.com/ilya.vasilyev.5817"
          rel="noreferrer"
          target="_blank"
        >Facebook</a>
        <a
          href="https://angel.co/ilya-vasilyev-2"
          rel="noreferrer"
          target="_blank"
        >Angel.co</a>
      </p>
    </section>
    <hr>
    <section>
      <h2>Skills</h2>
      <p>
        <span
          v-for="skill in skills"
          :key="skill.title"
          class="skill-row"
        >
          <span class="skill-title">{{ skill.title }}</span>
          <span class="skill-list">
            <span
              v-for="(item, i) in skill.list"
              :key="i"
              class="skill-item"
            >{{ item }}</span>
          </span>
        </span>

        <span class="skill-row">
          <span class="skill-title">Super power</span>
          <span class="skill-list">
            <small>
              Can easily find a piece of code on Stack Overflow that evals input from user, and then push it to master without thinking, so you better practice code review, pull requests, auto tests and CI/CD, for your own sake.
            </small>
          </span>
        </span>
      </p>
    </section>
    <hr class="print-break">
    <section>
      <h2>Experience</h2>
      <div
        v-for="experience in experiences"
        :key="experience.company"
        class="experience"
      >
        <div class="info">
          <h3>
            <span>{{ experience.company }}</span>
            <br>
            <b>
              <span
                v-for="(position, i) in experience.positions"
                :key="i"
                class="position"
              >{{ position }}</span>
            </b>
          </h3>
          <p>
            <span>{{ experience.dates }}</span>
          </p>
          <p>
            <small>{{ experience.description }}</small>
          </p>
        </div>
        <div class="achievements">
          <ul>
            <!-- eslint-disable -->
            <li
              v-for="(achievement, i) in experience.achievements"
              :key="i"
              v-html="achievement"
            />
            <!-- eslint-enable -->
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Cv',
  metaInfo () {
    return {
      title: 'Ilya Vasilyev | CV'
    }
  },
  data () {
    return {
      skills: [
        { title: 'Languages', list: ['JavaScript', 'ES2018', 'TypeScript', 'Python'] },
        { title: 'Frontend', list: ['Vue.js', 'Vue-router', 'Vuex', 'axios', 'AngularJS'] },
        { title: 'Animation', list: ['GSAP', 'Anime.js', 'SVG', 'CSS transitions', 'CSS keyframes', 'requestAnimationFrame()'] },
        { title: 'Visualization', list: ['SVG', 'D3', 'Billboard.js'] },
        { title: 'Backend', list: ['Node.js', 'Express', 'Feathers.js'] },
        { title: 'Testing', list: ['Cypress', 'Storybook', 'Jest'] },
        { title: 'DevOps', list: ['Git', 'Webpack', 'Docker'] }
      ],
      experiences: [
        {
          company: 'Vedomosti',
          positions: ['frontend developer'],
          dates: '2018',
          description: 'Mid-size news media company, oldest Russian newspaper, one of few state-independent media',
          achievements: [
            'rebuilt old HBR Russia site with <b>Vue</b>, using <b>SSR</b>',
            'made a series of special partnership projects, also with <b>Vue<b>',
            'maintained frontend part of multiple legacy apps, made mostly with <b>Ruby, Rails, SLIM templates, CoffeeScript, AngularJS, and SASS</b> (someone really hates braces)',
            'tried to help management with implementing <b>Agile</b> within the conservative and hierarchical organisation'
          ]
        },
        {
          company: 'MeYou',
          positions: ['frontend developer', 'UI/UX designer'],
          dates: '2014 — 2019 (occasional)',
          description: 'A communication startup for events (networking, polls, Q&A, PR)',
          achievements: [
            'set up <b>git</b> and trained the team to use it',
            'managed integration of <b>machine learning</b>',
            'designed initial <b>UI</b> and <b>UX</b>',
            'built <b>custom CSS framework</b> for internal use',
            'redesigned and redefined <b>admin panel</b>',
            'performed a lot of groundwork on events'
          ]
        },
        {
          company: 'PULSE.visuals',
          positions: ['co-founder'],
          dates: '2017',
          description: 'Another startup — an attempt to explore the idea of dynamic visualizations of financial models, this time with focus on real-word application and customers',
          achievements: [
            'iteratively crafted <b>marketing kit</b>',
            'tried <b>outbound sales</b> to improve sales pitches',
            'tried to find <b>product market fit</b>'
          ]
        },
        {
          company: 'CREATOMUS',
          positions: ['UI/UX designer', 'frontend developer'],
          dates: '2015',
          description: 'An interactive house configurator startup, that grew up from the winning of Garage48 GreenTech hackathon in Tallinn',
          achievements: [
            'joined the team of architects as a <b>designer</b>',
            'built the <b>frontend</b> part of the prototype',
            '<b>won</b> the hackathon'
          ]
        },
        {
          company: 'PLAIN.solutions',
          positions: ['co-founder'],
          dates: '2014 — 2016',
          description: 'First startup idea — to use interactive infographics for better risk management, predictive analysis and decision making',
          achievements: [
            'authored and designed all visual part of the <b>idea</b>',
            'learned <b>JS</b> to turn the idea into <b>interactive prototype</b>',
            'learned <b>fin analysis</b> and <b>statistics</b> to implement probability analysis in financial modeling, all on the client side with real-time response to user input',
            'met with client\'s analysts and decision makers to provide <b>custom tailored visualizations</b>',
            '<b>presented</b> the product to new customers'
          ]
        },
        {
          company: 'Fluffy Move Studio',
          positions: ['director', 'editor', 'motion designer', 'VFX artist', 'sound engineer', 'composer', 'manager'],
          dates: '2013 — 2019 (occasional)',
          description: 'Small family studio, started as an experimental animation lab, now creates custom video content',
          achievements: [
            'produced a <b>series of cartoons</b> for children show including six short films and two full-length animated backgrounds in <b>After Effects</b>',
            'built animation production <b>workflow</b>',
            '<b>hired</b> and <b>managed</b> animators and motion designers',
            'produced <b>web animation</b> experiments',
            'prototyped <b>interactive comics</b> and <b>books</b>'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('../assets/variables.scss');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,600');

.cv {
  font-family: 'Fira Sans Condensed', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;

  hr {
    margin: 40px auto;
  }

  h1 {
    padding: 0 20px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    margin-top: 30px;
    font-size: 25px;
    text-align: center;
    font-weight: 400;
  }

  h3 {
    margin: 0;
    padding: 0 20px;
    font-weight: 300;
    font-size: 30px;
    line-height: 1.25;
  }

  p {
    line-height: 1.5;

    &::first-letter {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }

  ul {
    margin: 0;
  }

  li {
    line-height: 1.5;
  }

  .contacts {
    text-align: center;

    a {
      margin-right: 20px;
    }
  }

  .skill-row {
    display: block;
    margin: 10px 0;

    .skill-title {
      display: inline-block;
      vertical-align: top;
      width: 35%;
      min-width: 150px;
      text-align: right;
      padding-right: 10px;
      margin: 4px 0;
      opacity: 0.75;
    }

    .skill-list {
      display: inline-block;
      width: 64%;
    }

    .skill-item {
      display: inline-block;
      line-height: 1;
      padding: 5px 10px;
      margin: 2px;
      border: 1px solid currentColor;
      border-radius: 5px;
    }

    @media (max-width: 500px) {
      .skill-title {
        width: 100%;
        text-align: left;
      }

      .skill-list {
        width: 100%;
      }
    }
  }

  .experience {
    display: flex;

    .info {
      width: 40%;
      margin: 15px 0;
    }

    .achievements {
      width: 60%;
      margin: 15px 0;
    }

    .position {
      display: block;
      font-size: 20px;
    }

    p {
      margin: 15px auto;
    }

    @media (max-width: 500px) {
      flex-wrap: wrap;

      .info {
        width: 100%;
        margin: 30px auto 0;
      }

      .achievements {
        width: 100%;
        margin: 0 auto 30px;
      }

      .position {
        display: inline;

        &:not(:last-child):after {
          content: ', ';
        }
      }
    }
  }

  @media print {
    h2 {
      page-break-after: avoid;
    }

    .experience {
      page-break-inside: avoid;
    }

    .print-break {
      page-break-after: always;
    }
  }
}

</style>
