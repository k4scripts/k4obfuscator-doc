import security from "@site/static/img/security.png";
import freedom from "@site/static/img/freedom.png";
import fast from "@site/static/img/fast.png";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const FeatureList = [
    {
        title: "Free To Go",
        Png: freedom,
        description: (
            <>
                K4Obfuscator is designed to be free and without limitations. We want to provide the best experience for
                our users.
            </>
        )
    },
    {
        title: "Focus on What Matters",
        Png: security,
        description: (
            <div>
                K4Obfuscator is frequently updated to maintain a decent obfuscation level meant to be used for simple
                obfuscation purposes.
                <br></br>
                <Link to={"/blog/security"}>Read more...</Link>
            </div>
        )
    },
    {
        title: "Fast Execution",
        Png: fast,
        description: (
            <>
                K4Obfuscator's VM architecture allows fast code execution, which is likely faster than the original
                code.
            </>
        )
    }
];

function Feature({ Png, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <img className={styles.featureSvg} src={Png} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
