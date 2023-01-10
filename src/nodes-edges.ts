import {Fag, FagId, Interesse} from "./model";

const position = {x: 0, y: 0};
const edgeType = 'smoothstep';

const bestaatteFag: FagId[] = ["IN1000", "IN1010", "IN1020", "IN1030"];

export const mkInteresseMapping = () => {
    const m = new Map<Interesse, readonly FagId[]>()
    m.set("Java", [FagId("IN1000"), FagId("IN1020")])
    m.set("Database", [FagId("IN2090"), FagId("IN3020")])
    m.set("Programmering", [FagId("IN3040"), FagId("IN2010")])
    return m;
}
export const interesseMapping = mkInteresseMapping();
export const interesser = [...interesseMapping.keys()];

export const findRelevant = (interesse: Interesse | null | undefined): readonly Fag[] => {
    if (interesse) {
        const relevantIds: Set<FagId> = new Set();
        const addDownstream = (fagId: FagId): void => {
            const fag = Fag.find(fag => fag.id == fagId);
            if (fag) {
                relevantIds.add(fagId)
                fag["Obligatoriske forkunnskaper"].forEach(addDownstream)
            }
        }
        const addUpstream = (fagId: FagId): void => {
            const fag = Fag.find(fag => fag.id == fagId);
            if (fag) {
                Fag.filter(f => f["Obligatoriske forkunnskaper"].indexOf(fagId) !== -1)
                    .forEach(upstream => {
                        relevantIds.add(upstream.id)
                        addUpstream(upstream.id);
                    })
            }
        }

        (interesseMapping.get(interesse) || []).forEach(id => {
            addDownstream(id)
            addUpstream(id)
        })

        return Fag.filter(fag => relevantIds.has(fag.id));
    }
    return Fag;
}

export const findNodes = (interesse: Interesse | null | undefined) => {
    const relevant: readonly Fag[] = findRelevant(interesse)

    return relevant.map(fag => {
        const isBestaatt = bestaatteFag.includes(fag.id)
        const isKvalifisert = fag["Obligatoriske forkunnskaper"].some(fagkrav => bestaatteFag.includes(fagkrav))
        
        const interesser = interesse ? interesseMapping.get(interesse) : [];

        const colorcode = isBestaatt? 'bestaatt' : isKvalifisert? 'kvalifisert' : 'ukvalifisert'
        const label = (fag.id+" "+fag["Kort om emnet"]).slice(0,40)

        return{id: fag.id, data: {fag, label: label, interesser}, position, label: fag.id, style:{width: 172, height: 52} ,className:colorcode }
        }
    )
}

export const findEdges = (nodes: ReturnType<typeof findNodes>) => {
    const edges: any[] = []
    nodes.forEach(node =>
        node.data.fag["Obligatoriske forkunnskaper"].forEach(avhengighet =>
            edges.push(({
                id: `${node.id}-${avhengighet}`,
                source: node.id,
                target: avhengighet,
                type: edgeType,
                animated: false
            }))
        )
    )
    return edges;
}