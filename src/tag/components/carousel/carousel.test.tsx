import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Carousel, {CarouselItem} from './carousel';
import userEvent from '@testing-library/user-event';

const CarouselTest = (props: any) => (
  <Carousel data-testid="carousel" {...props}>
    <CarouselItem
      id="1"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 0
    </CarouselItem>
    <CarouselItem
      id="2"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 1
    </CarouselItem>
    <CarouselItem
      id="3"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 2
    </CarouselItem>
    <CarouselItem
      id="4"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 3
    </CarouselItem>
  </Carousel>
);

const CarouselTestDisabled = (props: any) => (
  <Carousel data-testid="carousel" {...props}>
    <CarouselItem
      id="1"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 0
    </CarouselItem>
    <CarouselItem
      id="2"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 1
    </CarouselItem>
    <CarouselItem
      id="3"
      disabled
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 2
    </CarouselItem>
    <CarouselItem
      id="4"
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Element 3
    </CarouselItem>
  </Carousel>
);

test('render carousel and match snap', () => {
  const component = renderer.create(<CarouselTest />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('lateral clicks event call', () => {
  test('click left arrow', () => {
    const {getByTestId, getByText} = render(<CarouselTest defaultId="2" />);

    const leftArrow = getByTestId('carousel-left-arrow-test');
    fireEvent.click(leftArrow);
    expect(getByText(/Element 0/i)).toBeInTheDocument();
  });

  test('click right arrow', () => {
    const {getByTestId, getByText} = render(<CarouselTest />);

    const rightArrow = getByTestId('carousel-right-arrow-test');
    fireEvent.click(rightArrow);
    expect(getByText(/Element 1/i)).toBeInTheDocument();
  });
});

test('click dot and change element', () => {
  const {getByTestId, getByText} = render(<CarouselTest />);

  const dot = getByTestId('carousel-dot-test-3');

  expect(dot).toHaveClass('carousel-dot');

  userEvent.click(dot);
  const dotActive = getByTestId('carousel-dot-test-3');
  expect(dotActive).toHaveClass('carousel-dot_active');

  expect(getByText(/Element 3/i)).toBeInTheDocument();
});

describe('outlined carousel works properly', () => {
  test('render correctly', () => {
    const {getByTestId} = render(<CarouselTest outlined />);
    const carousel = getByTestId('carousel');
    expect(carousel).toHaveClass('carousel-container_outlined');
  });

  test('left arrow works', () => {
    const {getByTestId, getByText} = render(<CarouselTest outlined defaultId="2" />);
    const leftArrow = getByTestId('carousel-left-arrow-test');
    fireEvent.click(leftArrow);
    expect(getByText(/Element 0/i)).toBeInTheDocument();
  });

  test('right arrow works', () => {
    const {getByTestId, getByText} = render(<CarouselTest outlined />);
    const rightArrow = getByTestId('carousel-right-arrow-test');
    fireEvent.click(rightArrow);
    expect(getByText(/Element 1/i)).toBeInTheDocument();
  });

  test('dots works onclick', () => {
    const {getByTestId, getByText} = render(<CarouselTest outlined />);
    const dot = getByTestId('carousel-dot-test-3');

    expect(dot).toHaveClass('carousel-dot');

    userEvent.click(dot);
    const dotActive = getByTestId('carousel-dot-test-3');
    expect(dotActive).toHaveClass('carousel-dot_active');

    expect(getByText(/Element 3/i)).toBeInTheDocument();
  });
});

test('dot is disabled', () => {
  const {getByTestId} = render(<CarouselTestDisabled />);

  const disabledDot = getByTestId('carousel-dot-test-2');

  expect(disabledDot).toHaveAttribute('disabled');
});

test('jump disabled dot', () => {
  const {getByTestId, getByText} = render(<CarouselTestDisabled defaultId="2" />);
  const rightArrow = getByTestId('carousel-right-arrow-test');
  fireEvent.click(rightArrow);
  expect(getByText(/Element 3/i)).toBeInTheDocument();
});

