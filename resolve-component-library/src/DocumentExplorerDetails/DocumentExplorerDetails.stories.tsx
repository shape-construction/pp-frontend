import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DocumentExplorerDetails, DocumentExplorerDetailsProps } from './DocumentExplorerDetails';

const documentsInfo = [
  {
    document: {
      id: '1',
      extension: 'pdf',
      byteSize: 157286,
      createdAt: '2022-01-30T15:33:33.303Z',
      filename: 'Portable Document Format.pdf',
      downloadUrl: 'http://placekitten.com/200/300',
    },
    userName: 'Esther Howard',
  },
  {
    document: {
      id: 'x',
      extension: 'dwg',
      byteSize: 1572864,
      createdAt: '2022-02-28T15:33:33.303Z',
      filename: 'AutoCAD Drawing Database.dwg',
      downloadUrl: 'http://placekitten.com/200/300',
    },
    userName: 'Marcus Bins',
  },
  {
    document: {
      id: '500',
      extension: 'docx',
      byteSize: 15728640,
      createdAt: '2022-03-30T15:33:33.303Z',
      filename: 'Word Document.docx',
      downloadUrl: 'http://placekitten.com/200/300',
    },
    userName: 'Trudy Hintz',
  },
];

const defaultProps = {
  documentInfo: documentsInfo[0],
  isFirst: true,
  isLast: true,
};

export default {
  title: 'Design System/DocumentExplorerDetails',
  component: DocumentExplorerDetails,
} as Meta<DocumentExplorerDetailsProps>;

const DocumentInfoTemplate: Story<DocumentExplorerDetailsProps> = (args: any) => (
  <div className="relative -mt-4 -mb-4 h-screen pt-4 pb-4">
    <DocumentExplorerDetails {...args} />
  </div>
);

export const Default = DocumentInfoTemplate.bind({});
Default.args = {
  ...defaultProps,
};
