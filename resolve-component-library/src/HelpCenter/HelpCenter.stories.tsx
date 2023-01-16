import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { HelpCenter, HelpCenterProps } from './HelpCenter';

export default {
  component: HelpCenter,
  subcomponents: {},
  title: 'Widgets/HelpCenter',
} as Meta<HelpCenterProps>;

const Template: Story<HelpCenterProps> = (props) => {
  const [selectedArticle, selectArticle] = useState<HelpCenterProps['selectedArticle']>();

  return (
    <HelpCenter {...props} selectedArticle={selectedArticle} onSelectArticle={selectArticle} />
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  articles: [
    {
      id: 0,
      title: 'What are custom fields?',
      draft: false,
      body: `<p>If you can't see your project on the home page, try the following:</p>

      <p><strong>Go to the My Projects page</strong></p>

      <p>You can see a list of all of your projects by visiting the My Projects page. This can be found by clicking on your avatar in the NavBar, and selecting My Projects.</p>

      <p><img src="https://shape-construction.zendesk.com/hc/article_attachments/7865250935069" alt="Screenshot_2022-11-22_at_14.09.06.png" width="204" height="286"></p>

      <p><strong>Check your invites</strong></p>

      <p>You may not be able to see your project yet if you haven't accepted your invite. You can find your invites on the home page or by visiting the My Projects page and clicking on the invites tab.</p>

      <p><strong>Send a project access request</strong></p>

      <p>If you have a link to an issue but can't access it. You may have not been invited yet. You can request access to a project by visiting the issue link and clicking, request access.</p>

      <p><strong>Contact your administrator</strong></p>

      <p>If you don't yet have access to a project, you can also ask your team administrator to send you an invite.</p>

      <p><strong>Contact support</strong></p>

      <p>If you still can't access your project, send an email to <a href="mailto:support@shape.construction">support@shape.construction</a> and we'll be delighted to help!</p>`,
    },
    {
      id: 1,
      title: 'Adding new custom fields',
      draft: true,
      body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores harum ducimus pariatur corrupti atque quos explicabo perferendis itaque eius? Eius similique tenetur, a hic magni nemo corrupti quo. Animi, qui.Est occaecat exercitation dolore ut elit. In irure nisi adipisicing eiusmod dolor dolore. Commodo ullamco veniam duis elit ullamco id. Deserunt est excepteur anim sit. Et laboris ullamco esse aliqua officia mollit labore sunt laborum cillum.

      Esse deserunt consequat nisi ex laboris ullamco nostrud esse aute. Aute ut sunt eu velit aute enim enim reprehenderit. Irure ullamco qui elit sit deserunt esse aliquip nulla dolore id.
      
      Quis aliquip elit aliquip incididunt incididunt culpa. Deserunt ullamco irure deserunt occaecat qui nisi commodo ad. Nostrud sit aute excepteur exercitation ex. Et nostrud cupidatat labore ad est est. Esse amet eiusmod veniam officia enim. Velit sint excepteur sit eiusmod eiusmod nulla laboris deserunt culpa labore voluptate amet nostrud. Voluptate cupidatat enim deserunt quis anim irure minim consectetur nisi laborum consectetur ad velit.
      
      Qui velit sit sit excepteur nulla ea cupidatat anim aliquip. Pariatur et mollit sunt deserunt aliqua ad. Amet deserunt ut Lorem sit ea laboris elit nostrud Lorem esse. Consequat id tempor irure occaecat qui non sint. Do in exercitation esse proident ullamco ullamco elit adipisicing elit velit sint aliquip.
      
      Reprehenderit pariatur irure laboris amet do pariatur est. Velit dolore dolor elit ullamco duis. Dolor fugiat incididunt Lorem do consequat consectetur aliqua do ullamco sint do ex non enim. Ex laborum commodo deserunt anim voluptate non velit ad anim.
      
      Culpa proident anim cupidatat exercitation. Aute esse voluptate amet non enim velit id do cillum proident ex Lorem. Ut Lorem incididunt voluptate nostrud. Aliquip pariatur aliqua incididunt officia laborum labore est. Commodo aliqua do dolor cillum eu ea mollit labore duis incididunt aliquip. Cillum proident aute laborum quis amet occaecat aliquip duis aute labore in dolore laboris duis. Laborum non nostrud do reprehenderit pariatur magna qui occaecat magna.
      
      Incididunt Lorem irure labore reprehenderit labore voluptate. Adipisicing nulla irure deserunt et eu mollit esse magna ad. Voluptate elit officia sint adipisicing exercitation ad.
      
      Culpa eiusmod et do sit aliquip laboris nulla nulla magna minim adipisicing aliquip reprehenderit. Irure aliquip nostrud ipsum amet laboris ipsum aliqua ipsum consectetur ea sint culpa adipisicing. Esse mollit excepteur incididunt mollit aute consequat sunt consectetur est. Velit quis excepteur ullamco Lorem laborum laboris.
      
      Exercitation velit nisi mollit enim laborum sunt. Adipisicing id eiusmod aute aute eiusmod laborum culpa qui non deserunt cillum. Veniam consequat tempor ad tempor duis adipisicing et consectetur elit commodo consequat ea proident. Nulla cillum commodo Lorem cupidatat in veniam nulla incididunt magna dolor.
      
      Eiusmod ipsum non fugiat laboris consequat ea irure minim duis in tempor. Voluptate labore et dolor consequat consequat do anim nisi commodo anim. Sit incididunt in aute cillum cillum in ipsum sunt deserunt. Amet amet deserunt laborum in nulla culpa veniam exercitation duis cupidatat sint. Velit velit aliquip cillum nulla aute. Dolor dolore laborum nulla mollit exercitation ea et fugiat.`,
    },
    {
      id: 2,
      title: 'Custom fields visibility',
      draft: false,
      body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores harum ducimus pariatur corrupti atque quos explicabo perferendis itaque eius? Eius similique tenetur, a hic magni nemo corrupti quo. Animi, qui.Est occaecat exercitation dolore ut elit. In irure nisi adipisicing eiusmod dolor dolore. Commodo ullamco veniam duis elit ullamco id. Deserunt est excepteur anim sit. Et laboris ullamco esse aliqua officia mollit labore sunt laborum cillum.

      Esse deserunt consequat nisi ex laboris ullamco nostrud esse aute. Aute ut sunt eu velit aute enim enim reprehenderit. Irure ullamco qui elit sit deserunt esse aliquip nulla dolore id.
      
      Quis aliquip elit aliquip incididunt incididunt culpa. Deserunt ullamco irure deserunt occaecat qui nisi commodo ad. Nostrud sit aute excepteur exercitation ex. Et nostrud cupidatat labore ad est est. Esse amet eiusmod veniam officia enim. Velit sint excepteur sit eiusmod eiusmod nulla laboris deserunt culpa labore voluptate amet nostrud. Voluptate cupidatat enim deserunt quis anim irure minim consectetur nisi laborum consectetur ad velit.
      
      Qui velit sit sit excepteur nulla ea cupidatat anim aliquip. Pariatur et mollit sunt deserunt aliqua ad. Amet deserunt ut Lorem sit ea laboris elit nostrud Lorem esse. Consequat id tempor irure occaecat qui non sint. Do in exercitation esse proident ullamco ullamco elit adipisicing elit velit sint aliquip.
      
      Reprehenderit pariatur irure laboris amet do pariatur est. Velit dolore dolor elit ullamco duis. Dolor fugiat incididunt Lorem do consequat consectetur aliqua do ullamco sint do ex non enim. Ex laborum commodo deserunt anim voluptate non velit ad anim.
      
      Culpa proident anim cupidatat exercitation. Aute esse voluptate amet non enim velit id do cillum proident ex Lorem. Ut Lorem incididunt voluptate nostrud. Aliquip pariatur aliqua incididunt officia laborum labore est. Commodo aliqua do dolor cillum eu ea mollit labore duis incididunt aliquip. Cillum proident aute laborum quis amet occaecat aliquip duis aute labore in dolore laboris duis. Laborum non nostrud do reprehenderit pariatur magna qui occaecat magna.
      
      Incididunt Lorem irure labore reprehenderit labore voluptate. Adipisicing nulla irure deserunt et eu mollit esse magna ad. Voluptate elit officia sint adipisicing exercitation ad.
      
      Culpa eiusmod et do sit aliquip laboris nulla nulla magna minim adipisicing aliquip reprehenderit. Irure aliquip nostrud ipsum amet laboris ipsum aliqua ipsum consectetur ea sint culpa adipisicing. Esse mollit excepteur incididunt mollit aute consequat sunt consectetur est. Velit quis excepteur ullamco Lorem laborum laboris.
      
      Exercitation velit nisi mollit enim laborum sunt. Adipisicing id eiusmod aute aute eiusmod laborum culpa qui non deserunt cillum. Veniam consequat tempor ad tempor duis adipisicing et consectetur elit commodo consequat ea proident. Nulla cillum commodo Lorem cupidatat in veniam nulla incididunt magna dolor.
      
      Eiusmod ipsum non fugiat laboris consequat ea irure minim duis in tempor. Voluptate labore et dolor consequat consequat do anim nisi commodo anim. Sit incididunt in aute cillum cillum in ipsum sunt deserunt. Amet amet deserunt laborum in nulla culpa veniam exercitation duis cupidatat sint. Velit velit aliquip cillum nulla aute. Dolor dolore laborum nulla mollit exercitation ea et fugiat.`,
    },
    {
      id: 3,
      title: 'Custom fields limits',
      draft: false,
      body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores harum ducimus pariatur corrupti atque quos explicabo perferendis itaque eius? Eius similique tenetur, a hic magni nemo corrupti quo. Animi, qui.Est occaecat exercitation dolore ut elit. In irure nisi adipisicing eiusmod dolor dolore. Commodo ullamco veniam duis elit ullamco id. Deserunt est excepteur anim sit. Et laboris ullamco esse aliqua officia mollit labore sunt laborum cillum.

Esse deserunt consequat nisi ex laboris ullamco nostrud esse aute. Aute ut sunt eu velit aute enim enim reprehenderit. Irure ullamco qui elit sit deserunt esse aliquip nulla dolore id.

Quis aliquip elit aliquip incididunt incididunt culpa. Deserunt ullamco irure deserunt occaecat qui nisi commodo ad. Nostrud sit aute excepteur exercitation ex. Et nostrud cupidatat labore ad est est. Esse amet eiusmod veniam officia enim. Velit sint excepteur sit eiusmod eiusmod nulla laboris deserunt culpa labore voluptate amet nostrud. Voluptate cupidatat enim deserunt quis anim irure minim consectetur nisi laborum consectetur ad velit.

Qui velit sit sit excepteur nulla ea cupidatat anim aliquip. Pariatur et mollit sunt deserunt aliqua ad. Amet deserunt ut Lorem sit ea laboris elit nostrud Lorem esse. Consequat id tempor irure occaecat qui non sint. Do in exercitation esse proident ullamco ullamco elit adipisicing elit velit sint aliquip.

Reprehenderit pariatur irure laboris amet do pariatur est. Velit dolore dolor elit ullamco duis. Dolor fugiat incididunt Lorem do consequat consectetur aliqua do ullamco sint do ex non enim. Ex laborum commodo deserunt anim voluptate non velit ad anim.

Culpa proident anim cupidatat exercitation. Aute esse voluptate amet non enim velit id do cillum proident ex Lorem. Ut Lorem incididunt voluptate nostrud. Aliquip pariatur aliqua incididunt officia laborum labore est. Commodo aliqua do dolor cillum eu ea mollit labore duis incididunt aliquip. Cillum proident aute laborum quis amet occaecat aliquip duis aute labore in dolore laboris duis. Laborum non nostrud do reprehenderit pariatur magna qui occaecat magna.

Incididunt Lorem irure labore reprehenderit labore voluptate. Adipisicing nulla irure deserunt et eu mollit esse magna ad. Voluptate elit officia sint adipisicing exercitation ad.

Culpa eiusmod et do sit aliquip laboris nulla nulla magna minim adipisicing aliquip reprehenderit. Irure aliquip nostrud ipsum amet laboris ipsum aliqua ipsum consectetur ea sint culpa adipisicing. Esse mollit excepteur incididunt mollit aute consequat sunt consectetur est. Velit quis excepteur ullamco Lorem laborum laboris.

Exercitation velit nisi mollit enim laborum sunt. Adipisicing id eiusmod aute aute eiusmod laborum culpa qui non deserunt cillum. Veniam consequat tempor ad tempor duis adipisicing et consectetur elit commodo consequat ea proident. Nulla cillum commodo Lorem cupidatat in veniam nulla incididunt magna dolor.

Eiusmod ipsum non fugiat laboris consequat ea irure minim duis in tempor. Voluptate labore et dolor consequat consequat do anim nisi commodo anim. Sit incididunt in aute cillum cillum in ipsum sunt deserunt. Amet amet deserunt laborum in nulla culpa veniam exercitation duis cupidatat sint. Velit velit aliquip cillum nulla aute. Dolor dolore laborum nulla mollit exercitation ea et fugiat.`,
    },
    {
      id: 4,
      title: 'Custom fields visibility',
      draft: false,
      body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores harum ducimus pariatur corrupti atque quos explicabo perferendis itaque eius? Eius similique tenetur, a hic magni nemo corrupti quo. Animi, qui.Est occaecat exercitation dolore ut elit. In irure nisi adipisicing eiusmod dolor dolore. Commodo ullamco veniam duis elit ullamco id. Deserunt est excepteur anim sit. Et laboris ullamco esse aliqua officia mollit labore sunt laborum cillum.

Esse deserunt consequat nisi ex laboris ullamco nostrud esse aute. Aute ut sunt eu velit aute enim enim reprehenderit. Irure ullamco qui elit sit deserunt esse aliquip nulla dolore id.

Quis aliquip elit aliquip incididunt incididunt culpa. Deserunt ullamco irure deserunt occaecat qui nisi commodo ad. Nostrud sit aute excepteur exercitation ex. Et nostrud cupidatat labore ad est est. Esse amet eiusmod veniam officia enim. Velit sint excepteur sit eiusmod eiusmod nulla laboris deserunt culpa labore voluptate amet nostrud. Voluptate cupidatat enim deserunt quis anim irure minim consectetur nisi laborum consectetur ad velit.

Qui velit sit sit excepteur nulla ea cupidatat anim aliquip. Pariatur et mollit sunt deserunt aliqua ad. Amet deserunt ut Lorem sit ea laboris elit nostrud Lorem esse. Consequat id tempor irure occaecat qui non sint. Do in exercitation esse proident ullamco ullamco elit adipisicing elit velit sint aliquip.

Reprehenderit pariatur irure laboris amet do pariatur est. Velit dolore dolor elit ullamco duis. Dolor fugiat incididunt Lorem do consequat consectetur aliqua do ullamco sint do ex non enim. Ex laborum commodo deserunt anim voluptate non velit ad anim.

Culpa proident anim cupidatat exercitation. Aute esse voluptate amet non enim velit id do cillum proident ex Lorem. Ut Lorem incididunt voluptate nostrud. Aliquip pariatur aliqua incididunt officia laborum labore est. Commodo aliqua do dolor cillum eu ea mollit labore duis incididunt aliquip. Cillum proident aute laborum quis amet occaecat aliquip duis aute labore in dolore laboris duis. Laborum non nostrud do reprehenderit pariatur magna qui occaecat magna.

Incididunt Lorem irure labore reprehenderit labore voluptate. Adipisicing nulla irure deserunt et eu mollit esse magna ad. Voluptate elit officia sint adipisicing exercitation ad.

Culpa eiusmod et do sit aliquip laboris nulla nulla magna minim adipisicing aliquip reprehenderit. Irure aliquip nostrud ipsum amet laboris ipsum aliqua ipsum consectetur ea sint culpa adipisicing. Esse mollit excepteur incididunt mollit aute consequat sunt consectetur est. Velit quis excepteur ullamco Lorem laborum laboris.

Exercitation velit nisi mollit enim laborum sunt. Adipisicing id eiusmod aute aute eiusmod laborum culpa qui non deserunt cillum. Veniam consequat tempor ad tempor duis adipisicing et consectetur elit commodo consequat ea proident. Nulla cillum commodo Lorem cupidatat in veniam nulla incididunt magna dolor.

Eiusmod ipsum non fugiat laboris consequat ea irure minim duis in tempor. Voluptate labore et dolor consequat consequat do anim nisi commodo anim. Sit incididunt in aute cillum cillum in ipsum sunt deserunt. Amet amet deserunt laborum in nulla culpa veniam exercitation duis cupidatat sint. Velit velit aliquip cillum nulla aute. Dolor dolore laborum nulla mollit exercitation ea et fugiat.`,
    },
  ],
  selectedSection: {
    id: 0,
    name: 'Custom fields',
    html_url: 'https://helpcenter.shape.construction/category/0',
  },
  sections: [
    {
      id: 1,
      name: 'Teams, members and roles',
      html_url: 'https://helpcenter.shape.construction/category/1',
    },
    {
      id: 2,
      name: 'Build you location tree',
      html_url: 'https://helpcenter.shape.construction/category/2',
    },
    {
      id: 3,
      name: 'Create and configure issues',
      html_url: 'https://helpcenter.shape.construction/category/3',
    },
  ],
  helpCenterEmail: 'support@shape.construction',
  helpCenterUrl: 'https://helpcenter.shape.construction',
};

export const isLoading = Template.bind({});
isLoading.args = {
  ...Default.args,
  isLoading: true,
};

export const isEmpty = Template.bind({});
isEmpty.args = {
  ...Default.args,
  articles: [],
};
