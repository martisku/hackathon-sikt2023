export type FagId = string & { tag?: "FagId" }
const FagId = (str: String): FagId => str as any

export type Interesse = string & { tag?: "Interesse" }
const Interesse = (str: String): Interesse => str as any

// extractes fra uio.no
export interface Fag {
    id: FagId
    "Kort om emnet": string
    "Obligatoriske forkunnskaper": readonly FagId[]
}

type Interesser = Map<Fag, readonly Interesse[]>;

export const Fag: readonly Fag[] =
    [
        {
            id: FagId("IN1000"),
            "Kort om emnet": "Introduksjon til objektorientert programmering",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN1010"),
            "Kort om emnet": "Objektorientert programmering",
            "Obligatoriske forkunnskaper": ["IN1000", "INF1000", "INF1001", "INF1100", "IN1900", "IN-KJM1900"]
        },
        {id: FagId("IN1020"), "Kort om emnet": "Introduksjon til datateknologi", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN1030"),
            "Kort om emnet": "Systemer, krav og konsekvenser",
            "Obligatoriske forkunnskaper": ["IN1000", "INF1000", "INF1001", "IN1900", "INF1100", "IN1010", "INF1010"]
        },
        {
            id: FagId("IN1050"),
            "Kort om emnet": "Introduksjon til design, bruk, interaksjon",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN1060"), "Kort om emnet": "Bruksorientert design", "Obligatoriske forkunnskaper": ["IN1050", "ifi"]},
        {id: FagId("IN1080"), "Kort om emnet": "Mekatronikk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN1140"), "Kort om emnet": "Introduksjon til språkteknologi", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN1150"), "Kort om emnet": "Logiske metoder", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN1900"),
            "Kort om emnet": "Introduksjon i programmering for naturvitenskapelige anvendelser",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN1910"),
            "Kort om emnet": "Programmering for naturvitenskapelige anvendelser",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN2000"),
            "Kort om emnet": "Software Engineering med prosjektarbeid",
            "Obligatoriske forkunnskaper": ["IN1010", "IN1030", "IN1060", "IN2020", "IN2010", "IN2090"]
        },
        {id: FagId("IN2010"), "Kort om emnet": "Algoritmer og datastrukturer", "Obligatoriske forkunnskaper": ["IN1910"]},
        {id: FagId("IN2020"), "Kort om emnet": "Metoder i interaksjonsdesign", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN2030"),
            "Kort om emnet": "Prosjektoppgave i programmering",
            "Obligatoriske forkunnskaper": ["IN1010", "INF1010"]
        },
        {
            id: FagId("IN2040"),
            "Kort om emnet": "Funksjonell programmering",
            "Obligatoriske forkunnskaper": ["IN1000", "INF1000", "INF1001", "IN1900", "INF1100", "HUMIT1700"]
        },
        {id: FagId("IN2060"), "Kort om emnet": "Digitalteknikk og datamaskinarkitektur", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN2070"),
            "Kort om emnet": "Digital bildebehandling",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "MAT-IN1105", "MAT1100", "MAT1050", "MAT1110"]
        },
        {
            id: FagId("IN2080"),
            "Kort om emnet": "Beregninger og kompleksitet",
            "Obligatoriske forkunnskaper": ["IN1150", "INF1080"]
        },
        {
            id: FagId("IN2090"),
            "Kort om emnet": "Databaser og datamodellering",
            "Obligatoriske forkunnskaper": ["IN1000", "INF1000", "INF1001", "IN-KJM1900", "IN1900", "INF1100", "HUMIT1700", "IN1030"]
        },
        {id: FagId("IN2100"), "Kort om emnet": "Logikk for systemanalyse", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN2110"),
            "Kort om emnet": "Språkteknologiske metoder",
            "Obligatoriske forkunnskaper": ["INF1000", "IN1000", "IN1140"]
        },
        {id: FagId("IN2120"), "Kort om emnet": "Informasjonssikkerhet", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN2140"),
            "Kort om emnet": "Introduksjon til operativsystemer og datakommunikasjon",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN1020", "IN1010"]
        },
        {id: FagId("IN2150"), "Kort om emnet": "IT i organisasjoner", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3000"),
            "Kort om emnet": "Operativsystemer",
            "Obligatoriske forkunnskaper": ["IN2010", "INF2220", "INF1020", "IN2140"]
        },
        {id: FagId("IN3010"), "Kort om emnet": "Transformativt design", "Obligatoriske forkunnskaper": ["IN2020"]},
        {id: FagId("IN3015"), "Kort om emnet": "Ultralydavbildning", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3020"),
            "Kort om emnet": "Databasesystemer",
            "Obligatoriske forkunnskaper": ["IN2090", "INF1300", "IN2010", "INF2220", "IN1150", "INF1080"]
        },
        {
            id: FagId("IN3030"),
            "Kort om emnet": "Effektiv parallellprogrammering",
            "Obligatoriske forkunnskaper": ["IN1000", "INF1000", "IN1900", "INF1100", "IN1010", "INF1010", "INF2220", "IN2010"]
        },
        {id: FagId("IN3040"), "Kort om emnet": "Programmeringsspråk", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3050"),
            "Kort om emnet": "Introduksjon til kunstig intelligens og maskinlæring",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN3060"),
            "Kort om emnet": "Semantiske teknologier",
            "Obligatoriske forkunnskaper": ["IN1010", "IN1150", "IN2010"]
        },
        {id: FagId("IN3070"), "Kort om emnet": "Logikk", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3090"),
            "Kort om emnet": "Prosjektoppgave i informatikk: Digital økonomi og ledelse",
            "Obligatoriske forkunnskaper": ["INEC1810", "INEC1821", "INEC1831", "ECON1210"]
        },
        {id: FagId("IN3110"), "Kort om emnet": "Problemløsning med høynivå-språk", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3120"),
            "Kort om emnet": "Søketeknologi",
            "Obligatoriske forkunnskaper": ["IN1010", "INF1010", "IN2010", "IN2040"]
        },
        {
            id: FagId("IN3130"),
            "Kort om emnet": "Algoritmer: Design og effektivitet",
            "Obligatoriske forkunnskaper": ["IN2010", "INF2220"]
        },
        {id: FagId("IN3140"), "Kort om emnet": "Introduksjon til robotikk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN3160"), "Kort om emnet": "Digital systemkonstruksjon", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3170"),
            "Kort om emnet": "Microelectronics",
            "Obligatoriske forkunnskaper": ["FYS1210", "IN1080", "FYS3220", "FYS2210"]
        },
        {id: FagId("IN3190"), "Kort om emnet": "Digital signalbehandling", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3200"),
            "Kort om emnet": "High-Performance Computing and Numerical Projects",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN3210"), "Kort om emnet": "Network and Communications Security", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN3220"), "Kort om emnet": "Å forstå bruk før bruk", "Obligatoriske forkunnskaper": ["IN1060"]},
        {id: FagId("IN3230"), "Kort om emnet": "Nettverk", "Obligatoriske forkunnskaper": ["IN2140", "IN2010"]},
        {
            id: FagId("IN3240"),
            "Kort om emnet": "Testing av programvare",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1030", "INF1050", "IN1010"]
        },
        {
            id: FagId("IN3250"),
            "Kort om emnet": "Prosjektoppgave i informatikk: interaksjonsdesign",
            "Obligatoriske forkunnskaper": ["INF2260", "IN2020", "INF1510", "IN1060", "INF1010", "IN1010"]
        },
        {
            id: FagId("IN3260"),
            "Kort om emnet": "Prosjektoppgave i informatikk: datakommunikasjon",
            "Obligatoriske forkunnskaper": ["IN1010", "IN2010", "IN2140"]
        },
        {id: FagId("IN3280"), "Kort om emnet": "Forskerlinjen I", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3310"),
            "Kort om emnet": "Deep Learning for Image Analysis",
            "Obligatoriske forkunnskaper": ["FYS-STK3155", "STK2100"]
        },
        {id: FagId("IN4000"), "Kort om emnet": "Operativsystemer", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4015"), "Kort om emnet": "Ultralydavbildning", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4020"), "Kort om emnet": "Databasesystemer", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4030"), "Kort om emnet": "Introduksjon til bioinformatikk", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN4050"),
            "Kort om emnet": "Introduksjon til kunstig intelligens og maskinlæring",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN4060"), "Kort om emnet": "Semantiske teknologier", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4070"), "Kort om emnet": "Logikk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4080"), "Kort om emnet": "Natural Language Processing", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4110"), "Kort om emnet": "Problemløsning med høynivå-språk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4120"), "Kort om emnet": "Søketeknologi", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4140"), "Kort om emnet": "Introduksjon til robotikk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4150"), "Kort om emnet": "Digitale økosystemer", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4160"), "Kort om emnet": "Digital systemkonstruksjon", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4170"), "Kort om emnet": "Microelectronics", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4180"), "Kort om emnet": "Cyber Operations", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4190"), "Kort om emnet": "Digital signalbehandling", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN4200"),
            "Kort om emnet": "High-Performance Computing and Numerical Projects",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN4210"), "Kort om emnet": "Network and Communications Security", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4220"), "Kort om emnet": "Å forstå bruk før bruk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4230"), "Kort om emnet": "Nettverk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4240"), "Kort om emnet": "Testing av programvare", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4270"), "Kort om emnet": "Digital Business Development", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4310"), "Kort om emnet": "Deep Learning for Image Analysis", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4330"), "Kort om emnet": "Effektiv parallellprogrammering", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4340"), "Kort om emnet": "Deltakende kvalitative forskningsmetoder", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN4380"), "Kort om emnet": "Digital Transformation of Healthcare", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5000"), "Kort om emnet": "Qualitative Research Methods", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5010"), "Kort om emnet": "Design, Technology and Society", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5020"), "Kort om emnet": "Distribuerte systemer", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5030"), "Kort om emnet": "Protokoller og ruting i Internett", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5040"), "Kort om emnet": "Advanced Database Systems for Big Data", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5050"),
            "Kort om emnet": "Programming heterogeneous multi-core architectures",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5060"), "Kort om emnet": "Ytelse i distribuerte systemer", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5070"), "Kort om emnet": "The future internet protocols", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5080"), "Kort om emnet": "Sikkerhets- og risikostyring", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5090"), "Kort om emnet": "Health data and decision-making", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5100"), "Kort om emnet": "Utvalgte emner i omskrivningslogikk", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5110"),
            "Kort om emnet": "Specification and Verification of Parallel Systems",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5120"), "Kort om emnet": "Tangible interaction", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5130"), "Kort om emnet": "Uangripelige IT-systemer", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5140"),
            "Kort om emnet": "Smarte prosesser og smidige metoder i systemutvikling",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5150"), "Kort om emnet": "Recent Advancements in Internet Protocols", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5160"), "Kort om emnet": "Digital Leadership", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5170"), "Kort om emnet": "Modeller for parallellitet", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5180"), "Kort om emnet": "Analog Microelectronics Design", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5200"), "Kort om emnet": "Avansert digital systemkonstruksjon", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5210"), "Kort om emnet": "Information Systems", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5220"),
            "Kort om emnet": "Advanced mixed-signal CMOS integrated circuit design",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5230"), "Kort om emnet": "Elektrisk støy - beregning og mottiltak", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5240"), "Kort om emnet": "Design av CMOS RF-integrete kretser", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5250"), "Kort om emnet": "Seminar i aksjonsforskning", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5260"), "Kort om emnet": "Low Power IoT nodes", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5270"),
            "Kort om emnet": "Numeriske metoder for partielle differensiallikninger",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5290"), "Kort om emnet": "Ethical Hacking", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5320"), "Kort om emnet": "Development in platform ecosystems", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5340"), "Kort om emnet": "Statistisk signalbehandling", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5350"), "Kort om emnet": "Design av CMOS bildesensor", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5360"), "Kort om emnet": "Forskerlinjen II", "Obligatoriske forkunnskaper": ["IN3280"]},
        {
            id: FagId("IN5390"),
            "Kort om emnet": "ICT for Development: Building a Better World?",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5410"), "Kort om emnet": "Energiinformatikk", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5420"), "Kort om emnet": "Distributed Blockchain Technologies", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5431"), "Kort om emnet": "IT and Management", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5440"), "Kort om emnet": "Selected topics in static analysis", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5450"), "Kort om emnet": "Array Signal Processing", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5470"), "Kort om emnet": "Avansert forskningstema i design av IT", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5480"),
            "Kort om emnet": "Spesialisering innen forskning i design av IT",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN5490"),
            "Kort om emnet": "Advanced Topics in Artificial Intelligence for Intelligent Systems",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5500"), "Kort om emnet": "IT-støttet samarbeid", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5510"), "Kort om emnet": "Deltakende eksperimentell design", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5520"), "Kort om emnet": "Digital bildeanalyse", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5530"), "Kort om emnet": "Research Through Design", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5540"), "Kort om emnet": "Privacy by Design", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5550"),
            "Kort om emnet": "Neural Methods in Natural Language Processing",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5570"), "Kort om emnet": "Distribuerte objekter", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5580"), "Kort om emnet": "Computability theory", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5600"),
            "Kort om emnet": "Programmering av mobile applikasjoner i tingenes internett",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5610"), "Kort om emnet": "Advanced Topic in Digital Innovation", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN5620"),
            "Kort om emnet": "Interaction with AI and autonomous systems",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN5700"), "Kort om emnet": "Tåke Databehandling", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN5800"), "Kort om emnet": "Declarative Data Engineering", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9000"), "Kort om emnet": "Qualitative Research Methods", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9010"), "Kort om emnet": "Design, Technology and Society", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9020"), "Kort om emnet": "Distributed Systems", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9030"), "Kort om emnet": "Protokoller og ruting i Internett", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9040"), "Kort om emnet": "Advanced Database Systems for Big Data", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9050"),
            "Kort om emnet": "Programming heterogeneous multi-core architectures",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9060"), "Kort om emnet": "Ytelse i distribuerte systemer", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9070"), "Kort om emnet": "The Future Internet Protocols", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9100"), "Kort om emnet": "Utvalgte emner i omskrivningslogikk", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9110"),
            "Kort om emnet": "Specification and Verification of Parallel Systems",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9120"), "Kort om emnet": "Tangible interaction", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9130"), "Kort om emnet": "Unassailable IT-systems", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9140"),
            "Kort om emnet": "Smarte prosesser og smidige metoder i systemutvikling",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9150"), "Kort om emnet": "Recent Advancements in Internet Protocols", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9170"), "Kort om emnet": "Modeller for parallellitet", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9200"), "Kort om emnet": "Avansert digital systemkonstruksjon", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9210"), "Kort om emnet": "Information Systems", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9220"),
            "Kort om emnet": "Advanced mixed-signal CMOS integrated circuit design",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9230"), "Kort om emnet": "Elektrisk støy - beregning og mottiltak", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9240"), "Kort om emnet": "Design av CMOS RF-integrete kretser", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9260"), "Kort om emnet": "Low Power IoT nodes", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9270"),
            "Kort om emnet": "Numeriske metoder for partielle differensiallikninger",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9290"), "Kort om emnet": "Ethical Hacking", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9340"), "Kort om emnet": "Statistisk signalbehandling", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9350"), "Kort om emnet": "Design av CMOS bildesensor", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9390"),
            "Kort om emnet": "ICT for Development: Building a Better World?",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9410"), "Kort om emnet": "Energy Informatics", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9420"), "Kort om emnet": "Distributed Blockchain Technologies", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9440"), "Kort om emnet": "Selected Topics in Static Analysis", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9450"), "Kort om emnet": "Array Signal Processing", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9490"),
            "Kort om emnet": "Advanced Topics in Artificial Intelligence for Intelligent Systems",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9500"), "Kort om emnet": "IT-støttet samarbeid", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9510"), "Kort om emnet": "Deltakende eksperimentell design", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9520"), "Kort om emnet": "Digital bildeanalyse", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9530"), "Kort om emnet": "Research Through Design", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9540"), "Kort om emnet": "Privacy by Design", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9550"),
            "Kort om emnet": "Neural Methods in Natural Language Processing",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9570"), "Kort om emnet": "Distribuerte objekter", "Obligatoriske forkunnskaper": []},
        {id: FagId("IN9580"), "Kort om emnet": "Computability theory", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9600"),
            "Kort om emnet": "Programmering av mobile applikasjoner i tingenes internett",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN9700"), "Kort om emnet": "Tåke Databehandling", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN9900"),
            "Kort om emnet": "Selected Theoretical Topics in Information Systems Development",
            "Obligatoriske forkunnskaper": []
        },
    ]
