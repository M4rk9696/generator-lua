module.exports = {
    dirs: ['lib'],
    copyList: [{
        input: 'main.lua',
        output: 'main.lua'
    },{
        input: '_gitignore',
        output: '.gitignore'
    },{
        input: 'hello.lua',
        output: 'lib/hello.lua'
    }],
    templateList: [{
        input: 'README.md',
        output: 'README.md'
    }]
}