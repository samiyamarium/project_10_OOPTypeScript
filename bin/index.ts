#! /usr/bin/env node
const inquirer=require('inquirer')
const chalk=require('chalk')

//TO PRINT HELLO WORLD IN ARRAY

console.log(chalk.bgCyan("THIS IS THE RESULT OF OOP BLOCK FOR PRINTING HELLO WORLD IN TYPESCRIPT","\n"))
class program{
    constructor(name:string[]){
           console.log('My message to world: ', `${name}`,"\n")
           
    }
}
const disp=new program(['Hello' + ' world'])

//THIS BLOCK OF CODE DETERMINES IF A PERSON IS INTROVERT,EXTROVERT OR A MYSTERY

console.log(chalk.bgGreen("THIS RESULT OF BLOCK OF CODE DETERMINES IF A PERSON IS INTROVERT,EXTROVERT OR A MYSTERY","\n"))
class person{
    constructor(){
        let q=inquirer.prompt([{
            type:'rawlist',
            name:'personality',
            message:'Select 1 if You like to meet others and Select 2 If you do not like others and Select 3 if you are not sure',
            choices:['I like to meet others','I do not like to meet others','None'] ,
        },
        {
            type:'input',
            name:'my_new_student',
            message:'Enter Student name',

        }])
        
        .then(answer=>{
            
            console.log("\n",chalk.bgMagenta('YOU HAVE SELECTED:'), "\n",chalk.yellow(answer.personality),"\n");
            if(answer.personality=='I like to meet others'){
                let p1=(chalk.green("your personailty type is Extrovert."))
                console.log(chalk.green('You are', answer.my_new_student, 'and '),p1)}
            if(answer.personality=='I do not like to meet others'){
                    let p2=(chalk.magenta("you personality type is Introvert."))
                    console.log(chalk.magenta('You are', answer.my_new_student, 'and '),p2)}
                    if (answer.personality=='None'){
                        let p3=(chalk.red("personality type is a Mystery."))
                        console.log(chalk.red('You are', answer.my_new_student, 'and '),p3)
                    }
            })
        }

    }
const pers=new person()
