import styles from "./BasicTamplate.module.css"
const BasicTemplate = ({ data }) => {

    return(
        <div id="cv" className={styles.cvContainer}>
            <h1 className={styles.title}>{data.name}</h1>

            <div className={styles.contact}>
                {data.phone} | {data.email}
            </div>
            <div className={styles.contact}>
                {data.linkedin} {data.linkedin && data.github && "|"} {data.github}
            </div>
            <div className={styles.contact}>
                {data.website}
            </div>

            <div className={styles.summary}>{data.summary}</div>

            <div className={styles.sectionTitle}>WORK EXPERIENCES</div>
            {data.workExp.map((exp, index) => (
                <div key={index}>
                    <div className={styles.jobAttribute}>
                        <div className={styles.jobTitle}>{exp.nameCompany} - {exp.addressCompany}</div>
                        <div className={styles.jobMeta}>{exp.startWork} - {exp.endWork}</div>
                    </div>
                    <ul className={styles.list}>
                        {exp.workDisc.map((item, i) => (
                            <li key={i} className={styles.listItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className={styles.sectionTitle}>EDUCATION</div>
            {data.education.map((edu, index) => (
                <div key={index} className={styles.job}>
                    <div className={styles.jobTitle}>{edu.educationName}</div>
                    <div className={styles.jobAttribute}>
                        <div className={styles.jobMeta}>{edu.educationDesc}</div>
                        <div className={styles.jobMeta}>{edu.startEducation} - {edu.endEducation}</div>
                    </div>
                </div>
            ))}

            <div className={styles.sectionTitle}>SKILL</div>
            <ul className={styles.list}>
                {data.skills.map((skill, index) => (
                    <li key={index} className={styles.listItem}>
                        {skill}
                    </li>
                ))}
            </ul>

            <div className={styles.sectionTitle}>LANGUAGE</div>
            <ul className={styles.list}>
                {data.languages.map((lang, index) => (
                    <li key={index} className={styles.listItem}>
                        {lang}
                    </li>
                ))}
            </ul>

            <div className={styles.sectionTitle}>CERTIFICATE</div>
            <ul className={styles.list}>
                {data.certificates.map((cert, index) => (
                    <li key={index} className={styles.listItem}>
                        {cert}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BasicTemplate;