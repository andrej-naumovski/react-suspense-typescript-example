import React, { FunctionComponent, useEffect, useState, Suspense } from 'react';
import { RouteComponentProps } from '@reach/router';
import { fetchArtistDetails, fetchArtistTopAlbums, Artist as IArtist, Album } from '../api';
import Spinner from './Spinner';
import styled from 'styled-components';
import ArtistDetails from './ArtistDetails';
import TopAlbums from './TopAlbums';

interface Props extends RouteComponentProps<{ name: string }> {
}

const Artist: FunctionComponent<Props> = ({ name }) => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <ArtistDetails name={name!} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <TopAlbums name={name!} />
      </Suspense>
    </div>
  );
};

export default Artist;
