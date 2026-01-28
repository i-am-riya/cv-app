// CvPdfDocument.jsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  name: {
    fontSize: 24, // text-3xl
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginVertical: 4,
    fontSize: 10,
    color: "#4B5563", // Tailwind text-gray-600
  },
  divider: {
    marginVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB", // Tailwind gray-200
  },
  sectionHeading: {
    fontSize: 16, // text-2xl
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 14, // text-xl
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 4,
  },
  eduExpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  boldText: {
    fontWeight: "bold",
  },
  smallText: {
    fontSize: 11,
    color: "#4B5563",
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 2,
  },
});

export default function CvPdfDocument({ basicInfo, education, experience, skill }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Name */}
        <Text style={styles.name}>{basicInfo.name}</Text>

        {/* Links */}
        <View style={styles.contactRow}>
          {basicInfo.github && <Text>{basicInfo.github}</Text>}
          {basicInfo.portfolio && <Text>{basicInfo.portfolio}</Text>}
          {basicInfo.linkedin && <Text>{basicInfo.linkedin}</Text>}
        </View>

        <View style={styles.divider} />

        {/* Contact */}
        <View style={styles.contactRow}>
          {basicInfo.email && <Text>{basicInfo.email}</Text>}
          {basicInfo.contact && <Text>{basicInfo.contact}</Text>}
        </View>

        <View style={styles.divider} />

        {/* Objective */}
        <Text style={styles.sectionHeading}>Objective</Text>
        <View style={styles.divider} />
        <Text>{basicInfo.summary}</Text>

        {/* Education */}
        {education?.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Education</Text>
            <View style={styles.divider} />
            {education.map((edu, i) => (
              <View key={i} style={{ marginBottom: 4 }}>
                <View style={styles.eduExpRow}>
                  <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 2 }}>
                    {edu.instituteName}
                  </Text>
                  <Text style={styles.smallText}>
                    {edu.startYear}-{edu.endYear}
                  </Text>
                </View>
                <Text>{edu.degree}</Text>
                <Text>{edu.location}</Text>
              </View>
            ))}
          </>
        )}

        {/* Experience */}
        {experience?.length > 0 && (
          <>
            <Text style={styles.subHeading}>Experience</Text>
            <View style={styles.divider} />
            {experience.map((exp, i) => (
              <View key={i} style={{ marginBottom: 4 }}>
                <View style={styles.eduExpRow}>
                  <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 2 }}>
                    {exp.organisationName}
                  </Text>
                  <Text style={styles.smallText}>
                    {exp.startDate}-{exp.endDate} {exp.working === "true" ? "(Present)" : ""}
                  </Text>
                </View>
                <Text>{exp.title}</Text>
                <Text>{exp.location}</Text>
                <Text style={{ fontWeight: "bold", color: "#4B5563", marginVertical: 2 }}>
                  Responsibilities
                </Text>
                <Text style={{ marginLeft: 10 }}>{exp.responsiblities}</Text>
              </View>
            ))}
          </>
        )}

        {/* Skills */}
        <Text style={styles.sectionHeading}>Skills</Text>
        <View style={styles.divider} />
        {skill.length === 0 ? (
          <Text>No skills added yet</Text>
        ) : (
          skill.map((s, i) => (
            <Text key={i} style={styles.bullet}>
              • {s}
            </Text>
          ))
        )}
      </Page>
    </Document>
  );
}
