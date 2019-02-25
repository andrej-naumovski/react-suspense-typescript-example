import React, { FunctionComponent, useState, useEffect, Suspense } from 'react';
import Spinner from './Spinner';
import styled from 'styled-components';
import { Artist, fetchArtistDetails } from '../api';

import Image from './Image';
import { unstable_createResource } from 'react-cache';
import { string } from 'prop-types';
import Img from './Img';

interface Props {
  name: string;
}

const ArtistContainer = styled.div`
  display: flex;
  font-family: Helvetica;
  background: #582C4D;
  color: #ECE2D0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ArtistDetailsResource = unstable_createResource(fetchArtistDetails);

const ArtistDetails: FunctionComponent<Props> = ({ name }) => {
  const details = ArtistDetailsResource.read(name);

  const smallImage = details && details.image.find(image => image.size === 'small');

  const normalImage = details && details.image.find(image => image.size === 'large');

  return (
    <ArtistContainer>
      <h2>{details!.name}</h2>
      <Suspense fallback={<Image blurred src={smallImage!['#text']} />}>
        <Img src={normalImage!['#text']} />
      </Suspense>
    </ArtistContainer>
  );
};

export default ArtistDetails;
