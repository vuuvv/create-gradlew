const Generator = require('yeoman-generator');
const { basename } = require('path');
const debug = require('debug')('create-gradlew');

module.exports = class BasicGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.name = basename(process.cwd());
    this.props = {};
  }

  prompting() {
    const prompts = [
      {
        name: 'type',
        message: 'Which type of project to generate?',
        type: 'list',
        choices: [
          { name: 'simple', value: 'simple' },
          { name: 'single spring boot', value: 'single-spring-boot' },
          { name: 'multiple spring boot', value: 'multiple-spring-boot' },
          { name: 'module', value: 'module' },
        ],
      },
    ];
    return this.prompt(prompts).then(props => {
      this.props = Object.assign(this.props, props);
    });
  }

  writing() {
    debug(`this.name: ${this.name}`);
    debug(`this.props: ${JSON.stringify(this.props)}`);

    const context = {
      name: this.name,
      props: this.props,
    };

    console.log(this.props);

    this.fs.copyTpl(this.templatePath(`${this.props.type}/**/*`), this.destinationPath('.'), context, {}, { globOptions: { dot: true }});
  }
};
