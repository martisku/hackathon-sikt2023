import {Fag, FagId} from "./model";

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

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
        ({id: fag.id, data: {...fag, label: fag.id}, position, label: fag.id})
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