const Generator = require('yeoman-generator');
const config = require('./config')
const mkdirp = require('mkdirp');

// yo lua test --desc Sample lua app
module.exports = class extends Generator{
    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', { type: String, required: true });
        this.argument('desc', { type: String, required: true });
    }

    writing() {
        let desc = this.options.desc ? this.options.desc : '';
        const context = {
            name: this.options.appname,
            description: desc
        };

        config.dirs.forEach(item => {
            mkdirp(item);
        });

        config.copyList.forEach(item => {
            this.fs.copy(this.templatePath(item.input), this.destinationPath(item.output));
        });
        
        config.templateList.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item.input),
                this.destinationPath(item.output),
                context
                );
        });
    }
};