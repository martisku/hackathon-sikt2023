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
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN-KJM1900"]
        },
        {id: FagId("IN1020"), "Kort om emnet": "Introduksjon til datateknologi", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN1030"),
            "Kort om emnet": "Systemer, krav og konsekvenser",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN1010",]
        },
        {
            id: FagId("IN1050"),
            "Kort om emnet": "Introduksjon til design, bruk, interaksjon",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN1060"),
            "Kort om emnet": "Bruksorientert design",
            "Obligatoriske forkunnskaper": ["IN1050", "ifi"]
        },
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
        {
            id: FagId("IN2010"),
            "Kort om emnet": "Algoritmer og datastrukturer",
            "Obligatoriske forkunnskaper": ["IN1910"]
        },
        {id: FagId("IN2020"), "Kort om emnet": "Metoder i interaksjonsdesign", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN2030"),
            "Kort om emnet": "Prosjektoppgave i programmering",
            "Obligatoriske forkunnskaper": ["IN1010",]
        },
        {
            id: FagId("IN2040"),
            "Kort om emnet": "Funksjonell programmering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "HUMIT1700"]
        },
        {
            id: FagId("IN2060"),
            "Kort om emnet": "Digitalteknikk og datamaskinarkitektur",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN2070"),
            "Kort om emnet": "Digital bildebehandling",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "MAT-IN1105", "MAT1100", "MAT1050", "MAT1110"]
        },
        {
            id: FagId("IN2080"),
            "Kort om emnet": "Beregninger og kompleksitet",
            "Obligatoriske forkunnskaper": ["IN1150",]
        },
        {
            id: FagId("IN2090"),
            "Kort om emnet": "Databaser og datamodellering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN-KJM1900", "IN1900", "HUMIT1700", "IN1030"]
        },
        {id: FagId("IN2100"), "Kort om emnet": "Logikk for systemanalyse", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN2110"),
            "Kort om emnet": "Språkteknologiske metoder",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1140"]
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
            "Obligatoriske forkunnskaper": ["IN2010", "IN2140"]
        },
        {id: FagId("IN3010"), "Kort om emnet": "Transformativt design", "Obligatoriske forkunnskaper": ["IN2020"]},
        {id: FagId("IN3015"), "Kort om emnet": "Ultralydavbildning", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN3020"),
            "Kort om emnet": "Databasesystemer",
            "Obligatoriske forkunnskaper": ["IN2090", "IN2010", "IN1150",]
        },
        {
            id: FagId("IN3030"),
            "Kort om emnet": "Effektiv parallellprogrammering",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1900", "IN1010", "IN2010"]
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
            "Obligatoriske forkunnskaper": ["IN1010", "IN2010", "IN2040"]
        },
        {
            id: FagId("IN3130"),
            "Kort om emnet": "Algoritmer: Design og effektivitet",
            "Obligatoriske forkunnskaper": ["IN2010",]
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
        {
            id: FagId("IN3210"),
            "Kort om emnet": "Network and Communications Security",
            "Obligatoriske forkunnskaper": []
        },
        {id: FagId("IN3220"), "Kort om emnet": "Å forstå bruk før bruk", "Obligatoriske forkunnskaper": ["IN1060"]},
        {id: FagId("IN3230"), "Kort om emnet": "Nettverk", "Obligatoriske forkunnskaper": ["IN2140", "IN2010"]},
        {
            id: FagId("IN3240"),
            "Kort om emnet": "Testing av programvare",
            "Obligatoriske forkunnskaper": ["IN1000", "IN1030", "IN1010"]
        },
        {
            id: FagId("IN3250"),
            "Kort om emnet": "Prosjektoppgave i informatikk: interaksjonsdesign",
            "Obligatoriske forkunnskaper": ["IN2020", "IN1060", "IN1010"]
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
        {id: FagId("IN4190"), "Kort om emnet": "Digital signalbehandling", "Obligatoriske forkunnskaper": []},
        {
            id: FagId("IN4200"),
            "Kort om emnet": "High-Performance Computing and Numerical Projects",
            "Obligatoriske forkunnskaper": []
        },
        {
            id: FagId("IN5050"),
            "Kort om emnet": "Programming heterogeneous multi-core architectures",
            "Obligatoriske forkunnskaper": []
        },
    ]
