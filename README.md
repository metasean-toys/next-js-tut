
## References for included packages, including configuration work-arounds

- [next.js](https://github.com/zeit/next.js)
- [Storybook](https://storybook.js.org)
  - next.js doesn't require `import React from 'react'` in each component, _but Storybook does!_
- [Jest](https://facebook.github.io/jest/docs/tutorial-react.html)
- [StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots)
  - There are some auto-config conflicts between next.js and StoryShots, to work around them:
    - `npm install babel-plugin-react-require --save-dev`
    - add a `.babelrc` file to the project's root directory with:
      ```
      {
        "presets": ["es2015", "react"]
      }
      ```
  - at present react-test-renderer isn't installed with StoryShots, so it has to be manually added:
    `npm install --save-dev react-test-renderer`
