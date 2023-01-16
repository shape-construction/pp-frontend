import React, { FC, useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons/solid';
import classNames from 'classnames';
import ButtonPanel from '../ButtonPanel';
import Badge from '../Badge';
import { SHAPE, SIZE, THEME } from '../Badge/Badge.types';

export interface TreeSelectorProps {
  /**
   * Name attribute for the element to be used together with onSelect to set the selected node id.
   */
  name?: string;
  /**
   * Array of nodes from which the tree will be built
   */
  nodes: Node[];
  /**
   * Default selected node
   */
  defaultSelectedNodeId?: string | null;
  /**
   * Tree root node - will be default selected if defaultSelectedNodeId is not provided
   */
  rootNodeId: string;
  /**
   * Callback function that calls with the selected node id as the argument
   */
  onSelect?: (name: string, nodeId: string) => void;
  /**
   * The text that will appear in the search box
   */
  searchBoxLabel?: string;
}

export interface Node {
  id: string;
  parentId: string | null;
  name: string;
  shortCode: string;
  childrensLabel?: string | null;
  hasChildren?: boolean;
}

const defaultNode = {
  id: '',
  parentId: null,
  name: '',
  shortCode: '',
};

const findNode = (nodeId: string, nodes: Node[]) => {
  const node = nodes.find((searchedNode) => searchedNode.id === nodeId);
  if (!node) throw new Error(`Could not find node with id ${nodeId}`);
  return node;
};

const getNodeChildren = (passedNode: Node, nodes: Node[]) =>
  nodes.filter(
    (node: Node) => node.parentId === (passedNode.hasChildren ? passedNode.id : passedNode.parentId)
  );

const getNodeParents = (nodeId: string, nodes: Node[], list: Node[] = []): Node[] => {
  const node = findNode(nodeId, nodes);
  const newList = list ? [node, ...list] : [node];
  return node.parentId ? getNodeParents(node.parentId, nodes, newList) : newList;
};

export const TreeSelector: FC<TreeSelectorProps> = ({
  defaultSelectedNodeId,
  rootNodeId,
  nodes,
  onSelect,
  name = '',
}) => {
  const [currentNode, setCurrentNode] = useState<Node>(defaultNode);
  const [currentNodeOptions, setCurrentNodeOptions] = useState<Node[]>([]);
  const [breadcrumbItems, setBreadcrumbItems] = useState<
    {
      id: string;
      label: string;
      childrensLabel: string | undefined | null;
      parentId: string | null;
    }[]
  >([]);

  const setNodeParents = useCallback(
    (nodeId: string): void => {
      const nodeParents = getNodeParents(nodeId, nodes);
      setBreadcrumbItems(
        nodeParents.map((node) => ({
          id: node.id,
          label: node.name,
          parentId: node.parentId,
          childrensLabel: node.childrensLabel,
        }))
      );
    },
    [setBreadcrumbItems, nodes]
  );

  const selectNode = useCallback(
    (nodeId: string): void => {
      setCurrentNode(findNode(nodeId, nodes));
      setNodeParents(nodeId);
    },
    [setCurrentNode, setNodeParents, nodes]
  );

  const resetSelection = useCallback((): void => {
    selectNode(rootNodeId);
    if (onSelect) onSelect(name, rootNodeId);
  }, [rootNodeId, selectNode, onSelect, name]);

  useEffect(() => {
    selectNode(defaultSelectedNodeId || rootNodeId);
  }, [defaultSelectedNodeId, rootNodeId, selectNode]);

  useEffect(() => {
    setCurrentNodeOptions(getNodeChildren(currentNode, nodes));
  }, [currentNode, nodes]);

  const handleClickOption = (nodeId: string): void => {
    selectNode(nodeId);
    if (onSelect) onSelect(name, nodeId);
  };

  const breadcrumbItemSecondToLast = breadcrumbItems[breadcrumbItems.length - 2];

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-baseline border-b border-gray-200 bg-gray-50 px-4 pt-4 pb-2">
        <div className="flex flex-1 flex-wrap">
          {React.Children.map(
            breadcrumbItems.map((item, index) => (
              <div className="mb-2" key={item.id}>
                {index !== 0 && (
                  <ChevronRightIcon className="inline h-5 w-5 text-gray-500" aria-hidden="true" />
                )}
                <Badge
                  key={item.id}
                  label={item.label}
                  onRemove={() => {
                    if (item.parentId) handleClickOption(item.parentId);
                  }}
                  shape={SHAPE.BASIC}
                  size={SIZE.LARGE}
                  theme={item.id === currentNode.id ? THEME.BLUE : THEME.GRAY}
                  withRemoveButton={index !== 0}
                />
              </div>
            )),
            (item) => item
          )}
        </div>
        <div
          role="button"
          onClick={resetSelection}
          className="pl-3 text-sm font-medium text-indigo-500 hover:text-indigo-400"
          tabIndex={0}
        >
          Clear all
        </div>
      </div>

      <div className="mt-1 px-4">
        <h4 className="flex items-center pt-5 pb-2 font-medium text-gray-800">
          {currentNode.id !== rootNodeId && (
            <span
              role="button"
              className="inline-flex items-center font-medium hover:text-gray-600"
              onClick={() => handleClickOption(currentNode.parentId || '')}
              tabIndex={0}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              &nbsp;
              {breadcrumbItemSecondToLast?.childrensLabel || ''}
            </span>
          )}
        </h4>
      </div>

      <div
        className="flex flex-1 flex-col space-y-2 overflow-y-auto px-4 pb-4"
        style={{ flexBasis: '300px' }} // no provision for flexBasis customisation in Tailwind... default of 0% causes strange rendering issues
      >
        {currentNodeOptions.length > 0 ? (
          currentNodeOptions.map((node) => (
            <ButtonPanel key={node.id} onClick={() => handleClickOption(node.id)}>
              <div
                className={classNames('overflow-hidden rounded-md border border-gray-300', {
                  'bg-indigo-500 text-white hover:bg-indigo-400': node.id === currentNode.id,
                  'bg-white hover:bg-gray-50': node.id !== currentNode.id,
                })}
              >
                <div className="flex items-center p-4">
                  <div className="flex-1">{node.name}</div>
                  {node.hasChildren && (
                    <div className="ml-5 shrink-0">
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
            </ButtonPanel>
          ))
        ) : (
          <p className="bold">No more options</p>
        )}
      </div>
    </div>
  );
};
