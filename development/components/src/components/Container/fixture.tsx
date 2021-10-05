import React from 'react';
import { ContainerProps } from './Container';

export const ChildrenFixtureComponent = <div>Hello world</div>;

export const propsFixtureWithoutChildren: ContainerProps = {};

export const propsFixtureWithTextChildren: ContainerProps = {
  children: 'children',
};

export const propsFixtureWithComponentChildren: ContainerProps = {
  children: ChildrenFixtureComponent,
};
