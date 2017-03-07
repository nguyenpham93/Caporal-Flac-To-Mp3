const prog = require('caporal');
const converter = require('./module_flacmp3/convert_callback').Converter;
prog
    .version('1.0.0')
    .command('convert','Convert Flac To Mp3')
    .argument('<app>','App to convert',/^converter$/)
    .argument('<src>','Source folder')
    .argument('<des>','Destination folder')
    .option('--flag <flag>','Replace file if exist',/-n|-i$/,'-n')
    .option('--limits <limit>','Limit files convert at a time',prog.INT,5)
    .action((args,options,logger)=>{
        let convert = new converter();
        let srcFolder = args.src;
        let desFolder = args.des;
        let myoptions = {
            'limits' : options.limits,
            'flag' : options.flag 
        }
        convert.runner(srcFolder,desFolder,options); 
    })
    prog.parse(process.argv);