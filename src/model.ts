export type FagId = string & { tag?: "FagId" }
export const FagId = (str: String): FagId => str as any

export type Interesse = string & { tag?: "Interesse" }
export const Interesse = (str: String): Interesse => str as any

// extractes fra uio.no
export interface Fag {
    id: FagId
    "Kort om emnet": string
    "Obligatoriske forkunnskaper": readonly FagId[]
    interesser: readonly Interesse[]
}

type Interesser = Map<Fag, readonly Interesse[]>;

export const Fag: readonly Fag[] =
    [
        {
            id: FagId("IN1000"),
            "Kort om emnet": "Introduksjon til objektorientert programmering",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN1010"),
            "Kort om emnet": "Objektorientert programmering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN-KJM1900"],
            interesser: [Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN1030"),
            "Kort om emnet": "Systemer, krav og konsekvenser",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN1010",],
                interesser: [Interesse("Systemer"), Interesse("Diagrammer"), Interesse("Kravspesifikasjon")]
        },
        {
            id: FagId("IN1050"),
            "Kort om emnet": "Introduksjon til design, bruk, interaksjon",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Design"), Interesse("Diagrammer"), Interesse("Interaksjon"), Interesse("Brukere")]
        },
        {
            id: FagId("IN1060"),
            "Kort om emnet": "Bruksorientert design",
            "Obligatoriske forkunnskaper": ["IN1050", "ifi"],
            interesser: [Interesse("Design"), Interesse("Interaksjon"), Interesse("Brukere")]
        },
        {
            id: FagId("IN1900"),
            "Kort om emnet": "Introduksjon i programmering for naturvitenskapelige anvendelser",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Python"), Interesse("Matematikk"), Interesse("Programmering"), Interesse("Naturfag")]
        },
        {
            id: FagId("IN1910"),
            "Kort om emnet": "Programmering for naturvitenskapelige anvendelser",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Python"), Interesse("Matematikk"), Interesse("Programmering"), Interesse("Naturfag")]
        },
        {
            id: FagId("IN2000"),
            "Kort om emnet": "Software Engineering med prosjektarbeid",
            "Obligatoriske forkunnskaper": ["IN1010", "IN1030", "IN1060", "IN2020", "IN2010", "IN2090"],
            interesser: [Interesse("System"), Interesse("Prosjekt"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN2010"),
            "Kort om emnet": "Algoritmer og datastrukturer",
            "Obligatoriske forkunnskaper": ["IN1910"],
            interesser: [Interesse("Algoritmer"), Interesse("Matematikk"), Interesse("Programmering")]
        },
        {
            id: FagId("IN2030"),
            "Kort om emnet": "Prosjektoppgave i programmering",
            "Obligatoriske forkunnskaper": ["IN1010",],
            interesser: [Interesse("Prosjekt"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN2040"),
            "Kort om emnet": "Funksjonell programmering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "HUMIT1700"],
            interesser: [Interesse("Prosjekt"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN2060"),
            "Kort om emnet": "Digitalteknikk og datamaskinarkitektur",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Prosjekt"), Interesse("Arkitektur"), Interesse("Hardware")]
        },
        {
            id: FagId("IN2070"),
            "Kort om emnet": "Digital bildebehandling",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "MAT-IN1105", "MAT1100", "MAT1050", "MAT1110"],
            interesser: [Interesse("Bilde"), Interesse("Hardware"), Interesse("Digital")]
        },
        {
            id: FagId("IN2080"),
            "Kort om emnet": "Beregninger og kompleksitet",
            "Obligatoriske forkunnskaper": ["IN1150"],
            interesser: [Interesse("Matematikk"), Interesse("Algoritmer"), Interesse("Programmering")]
        },
        {
            id: FagId("IN2090"),
            "Kort om emnet": "Databaser og datamodellering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN-KJM1900", "IN1900", "HUMIT1700", "IN1030"],
            interesser: [Interesse("Database"), Interesse("Diagrammer"), Interesse("Prosjekt")]
        },
        {
            id: FagId("IN2110"),
            "Kort om emnet": "Språkteknologiske metoder",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1140"],
            interesser: [Interesse("Språk"), Interesse("Brukere"), Interesse("Programmering")]
        },
        {
            id: FagId("IN2140"),
            "Kort om emnet": "Introduksjon til operativsystemer og datakommunikasjon",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN1020", "IN1010"],
            interesser: [Interesse("Hardware"), Interesse("System"), Interesse("Programmering"), Interesse("Prosjekt"), Interesse("Network")]
        },
        {
            id: FagId("IN3000"),
            "Kort om emnet": "Operativsystemer",
            "Obligatoriske forkunnskaper": ["IN2010", "IN2140"],
            interesser: [Interesse("Hardware"), Interesse("System"), Interesse("Programmering"), Interesse("Prosjekt")]
        },
        {
            id: FagId("IN3020"),
            "Kort om emnet": "Databasesystemer",
            "Obligatoriske forkunnskaper": ["IN2090", "IN2010", "IN1150",],
            interesser: [Interesse("Prosjekt"), Interesse("Database"), Interesse("Diagrammer")]
        },
        {
            id: FagId("IN3030"),
            "Kort om emnet": "Effektiv parallellprogrammering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN1010", "IN2010"],
            interesser: [Interesse("Algoritmer"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3050"),
            "Kort om emnet": "Introduksjon til kunstig intelligens og maskinlæring",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Naturfag"), Interesse("Algoritmer"), Interesse("Brukere"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3060"),
            "Kort om emnet": "Semantiske teknologier",
            "Obligatoriske forkunnskaper": ["IN1010", "IN1150", "IN2010"],
            interesser: [Interesse("Prosjekt"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3090"),
            "Kort om emnet": "Prosjektoppgave i informatikk: Digital økonomi og ledelse",
            "Obligatoriske forkunnskaper": ["INEC1810", "INEC1821", "INEC1831", "ECON1210"],
            interesser: [Interesse("Prosjekt"), Interesse("Matematikk"), Interesse("Brukere"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3120"),
            "Kort om emnet": "Søketeknologi",
            "Obligatoriske forkunnskaper": ["IN1010", "IN2010", "IN2040"],
            interesser: [Interesse("Database"), Interesse("Algoritmer"), Interesse("Matematikk"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3130"),
            "Kort om emnet": "Algoritmer: Design og effektivitet",
            "Obligatoriske forkunnskaper": ["IN2010"],
            interesser: [Interesse("Algoritmer"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3170"),
            "Kort om emnet": "Microelectronics",
            "Obligatoriske forkunnskaper": ["FYS1210", "IN1080", "FYS3220", "FYS2210"],
            interesser: [Interesse("Prosjekt"), Interesse("Hardware"), Interesse("Matematikk")]
        },
        {
            id: FagId("IN3200"),
            "Kort om emnet": "High-Performance Computing and Numerical Projects",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Prosjekt"), Interesse("Matematikk"), Interesse("Algoritmer"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3210"),
            "Kort om emnet": "Network and Communications Security",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Network"), Interesse("Security"), Interesse("System"), Interesse("Diagrammer")]
        },
        {
            id: FagId("IN3240"),
            "Kort om emnet": "Testing av programvare",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1030", "IN1010"],
            interesser: [Interesse("System"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3250"),
            "Kort om emnet": "Prosjektoppgave i informatikk: interaksjonsdesign",
            "Obligatoriske forkunnskaper": ["IN2020", "IN1060", "IN1010"],
            interesser: [Interesse("Prosjekt"), Interesse("Design"), Interesse("Brukere"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3260"),
            "Kort om emnet": "Prosjektoppgave i informatikk: datakommunikasjon",
            "Obligatoriske forkunnskaper": ["IN1010", "IN2010", "IN2140"],
            interesser: [Interesse("Prosjekt"), Interesse("Network"), Interesse("Hardware"), Interesse("Programmering")]
        },
        {
            id: FagId("IN3310"),
            "Kort om emnet": "Deep Learning for Image Analysis",
            "Obligatoriske forkunnskaper": ["FYS-STK3155", "STK2100"],
            interesser: [Interesse("Bilde"), Interesse("Algoritmer"), Interesse("System"), Interesse("Programmering")]
        },
        {
            id: FagId("IN4050"),
            "Kort om emnet": "Introduksjon til kunstig intelligens og maskinlæring",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Algoritmer"), Interesse("Matematikk"), Interesse("Naturfag"), Interesse("Programmering")]
        },
        {
            id: FagId("IN4200"),
            "Kort om emnet": "High-Performance Computing and Numerical Projects",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Prosjekt"), Interesse("Algoritmer"), Interesse("Matematikk"), Interesse("Programmering")]
        },
        {
            id: FagId("IN5050"),
            "Kort om emnet": "Programming heterogeneous multi-core architectures",
            "Obligatoriske forkunnskaper": [],
            interesser: [Interesse("Prosjekt"), Interesse("Java"), Interesse("ObjektOrientert"), Interesse("Programmering")]
        }
    ];
