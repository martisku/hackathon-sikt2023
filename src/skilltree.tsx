import React, {useCallback, useState} from 'react';
import ReactFlow, {useEdgesState, useNodesState} from 'reactflow';
import {graphlib, layout} from 'dagre';
import 'reactflow/dist/style.css';
import {findEdges, findNodes, interesser} from './nodes-edges';
import './index.css';
import {Interesse} from "./model";
import FormControl from '@mui/material/FormControl';
import {InputLabel, MenuItem, Select} from "@mui/material";

const dagreGraph = new graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes: any[], edges: any[], direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({rankdir: direction});

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, {width: nodeWidth, height: nodeHeight});
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        return node;
    });

    return {nodes, edges};
};

const SkillTree = () => {
    const [interesse, setInteresse] = useState<Interesse | undefined>(undefined)
    const layouted = getLayoutedElements([], []);
    const [nodes, setNodes, onNodesChange] = useNodesState(layouted.nodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layouted.edges);

    const onLayout = useCallback(
        (interesse: Interesse) => {
            setInteresse(interesse)
            const initialNodes = findNodes(interesse);
            const initialEdges = findEdges(initialNodes);
            const layouted = getLayoutedElements(initialNodes, initialEdges);
            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);
        },
        [nodes, edges, interesse]
    );
    console.warn(interesser)

    const renderedInteresser = interesser.map((i, idx) => <MenuItem key={idx} value={i}>{i}</MenuItem>)

    return (
        <div className="layoutflow">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Velg interesse</InputLabel>
                <Select
                    value={interesse || ""}
                    label="Velg interesse"
                    onChange={(ev) => {
                        onLayout(ev.target.value)
                    }}
                > {renderedInteresser}
                </Select>
            </FormControl>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodesDraggable={false}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            />
        </div>
    );
};

export default SkillTree;