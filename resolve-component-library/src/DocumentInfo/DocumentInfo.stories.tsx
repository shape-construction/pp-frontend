import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DocumentInfo, DocumentInfoProps } from './DocumentInfo';
import { File } from 'types/File';

const defaultDocument: File = {
  id: '1',
  extension: 'pdf',
  byteSize: 7512,
  createdAt: '2022-03-30T15:33:33.303Z',
  filename: ' report_2022-02-16.pdf',
  downloadUrl: 'http://www.example.com/report_2022-02-16.pdf',
};

export default {
  title: 'Design System/DocumentInfo',
  component: DocumentInfo,
  args: {
    document: defaultDocument,
    userName: 'Esther Howard',
  },
} as Meta<DocumentInfoProps>;

const DocumentInfoTemplate: Story<DocumentInfoProps> = (args: any) => <DocumentInfo {...args} />;

export const Default = DocumentInfoTemplate.bind({});

export const WithoutUserName = DocumentInfoTemplate.bind({});
WithoutUserName.args = {
  userName: undefined,
};

export const WithFilenameOverflowing = DocumentInfoTemplate.bind({});
WithFilenameOverflowing.args = {
  document: {
    ...defaultDocument,
    filename: ' report_2022-02-16 report_2022-02-16 report_2022-02-16 report_2022-02-16.pdf',
    byteSize: 1572864,
  },
};
WithFilenameOverflowing.parameters = {
  viewport: {
    defaultViewport: 'iphonese2',
  },
};
