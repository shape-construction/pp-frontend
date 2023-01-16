import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListSections, ListSectionsProps } from './ListSections';

describe('ListSections', () => {
  it('renders a list of recommended sections', () => {
    const sections: ListSectionsProps['sections'] = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      name: `Section name ${index}`,
      html_url: '#',
    }));
    render(<ListSections title="Section list title" sections={sections} />);

    expect(screen.getByRole('heading', { name: 'Section list title' })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: 'sections' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem', { name: 'section' })).toHaveLength(10);
  });
});
