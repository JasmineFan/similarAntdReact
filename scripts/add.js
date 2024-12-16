const path=require('path')
const {spawn} = require('child_process')
var fs = require('fs')
const glob = require('glob');
const handlebars = require('handlebars');
const chalk = require('chalk');
const fetch = require('node-fetch');




// console.log(/aa/,process.argv[2])
console.log(/bb/,process.cwd()+'src/'+process.argv[2])
const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/, m => m.toUpperCase());
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '');

(async ()=>{
    const component = process.argv[2];

    const dirName = lowCase(component);
    const componentName = varCase(component);
    
    // spawn('mkdir', ['-p', path.join(process.cwd(), `src/${dirName}`)]);
    if (!fs.existsSync(path.join(process.cwd(), `src/${dirName}`))) {
    fs.mkdirSync(path.join(process.cwd(), `src/${dirName}`));
       
    }
    const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'));

    tplFiles.forEach((async filePath => {
      
        const content = await fs.readFileSync(filePath, 'utf-8');
 
        const template = handlebars.compile(content);
        
        const result = template({
            dirName,
            componentName
        });



        const newPath = filePath.replace('scripts/template', `src/${dirName}`)
        .replace('component', dirName)
        .replace('Component', componentName)
        .replace('.hbs', '');

        
        await fs.writeFile(newPath, result, function(err) {
          
            if(err) {
                return console.log(err);
            }
            console.log(chalk.green(`write ${newPath} success`));
        });

       
    }))
    const response = await fetch(`https://unpkg.com/antd@4.19.5/es/${dirName}/style/index.css`);
    const body = await response.text();

    const scssFile = path.join(process.cwd(), `src/${dirName}/index.scss`);

    await fs.writeFile(scssFile,  body, function(err) {
          
                if(err) {
                    return console.log(err);
                }
                console.log(chalk.green(`write ${scssFile} success`));
            });
    console.log(chalk.green(`update ${scssFile} success`));


})()
