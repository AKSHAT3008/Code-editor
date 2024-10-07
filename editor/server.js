const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { exec } = require('child_process');
const os = require('os');

const app = express();
app.use(bodyParser.json());

app.post('/compile', (req, res) => {
    const { code, input } = req.body;
    fs.writeFileSync('temp.cpp', code);

    exec('g++ temp.cpp -o temp.out 2> error.txt', (err) => {
        if (err) {
            const errors = fs.readFileSync('error.txt', 'utf-8');
            res.send(errors);
        } else {
            const runCommand = os.platform() === 'win32' ? '.\\temp.out' : './temp.out';
            const child = exec(runCommand, (err, stdout, stderr) => {
                if (err) {
                    res.send(stderr);
                } else {
                    res.send(stdout);
                }
            });

            if (input) {
                child.stdin.write(input);
                child.stdin.end();
            }
        }
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});