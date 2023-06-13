import React from 'react';
export { default as TreeViewElement } from './treeViewElement';
interface ITree {
    /**
     * Alternative className for Tree
     */
    className?: string;
    [other: string]: any;
}
declare const Tree: React.FC<ITree>;
export default Tree;
