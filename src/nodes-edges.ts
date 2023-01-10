import {Fag, FagId} from "./model";

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

const bestaatteFag: FagId[] = ["IN1000", "IN1010", "IN1020", "IN1030"];

const findNodes = () => {
    const relevantIds: FagId[] = []
    Fag.forEach(fag => {
        if (fag["Obligatoriske forkunnskaper"].length > 0) {
            relevantIds.push(fag.id);
        }
        fag["Obligatoriske forkunnskaper"].forEach(id => relevantIds.push(id))
    })
    const relevant = Fag.filter(fag => relevantIds.indexOf(fag.id) !== -1)

    return relevant.map(fag =>
        {
            console.log(bestaatteFag.includes(fag.id))
            const isBestaatt = bestaatteFag.includes(fag.id)
            const isKvalifisert = fag["Obligatoriske forkunnskaper"].some(fagkrav => bestaatteFag.includes(fagkrav))
            const colorcode = isBestaatt? 'bestaatt' : isKvalifisert? 'kvalifisert' : 'ukvalifisert'
            const label = (fag.id+" "+fag["Kort om emnet"]).slice(0,40)
            return{id: fag.id, data: {...fag, label: label}, position, label: fag.id, style:{width: 172, height: 52} ,className:colorcode }
    }
    )
}
export const initialNodes = findNodes();

const findEdges = () => {
  const edges: any[] = []
  initialNodes.forEach(node =>
      node.data["Obligatoriske forkunnskaper"].forEach(avhengighet =>
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
export const initialEdges = findEdges();