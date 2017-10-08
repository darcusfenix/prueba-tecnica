import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.babel";
import open from "open";

const app = express(),
    port = process.env.PORT || 3000;

const compiler = webpack(config);

let directory;

if (process.env.NODE_ENV === "production") {
    directory = "../dist";
} else {
    app.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
            overlay: true
        })
    );

    app.use(
        require("webpack-hot-middleware")(compiler, {
            overlay: true,
            reload: false
        })
    );
    directory = "../src";
}

app.use(express.static(path.join(__dirname, directory)));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, directory, "index.html"));
});

app.listen(port, err => {
    if (err) {
        console.log(err);
        exit(0);
    } else {
        if (process.env.NODE_ENV !== "production") {
            open(`http://localhost:${port}`);
        }

        console.log(
            `Servidor iniciado en puerto: ${port} , proceso: ${process.pid}`
        );
    }
});
