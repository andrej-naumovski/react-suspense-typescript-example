import React, { FunctionComponent, useState, useEffect, Suspense } from 'react';
import { Artist as IArtist, fetchTopArtists } from '../api';
import styled from 'styled-components';
import { darken } from 'polished';
import { RouteComponentProps, Link } from '@reach/router';
import Spinner from './Spinner';
import { unstable_createResource } from 'react-cache';
import Artist from './Artist';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 40%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
`;

const ArtistContainer = styled.div`
  border: 1px solid #A26769;
  line-height: 1.5rem;
  margin: 8px 0;
  padding: 4px;
  width: 350px;
  border-radius: 5px;
  background: #582C4D;
  color: #ECE2D0;
  cursor: pointer;

  &:hover {
    background: ${darken(0.05)('#582C4D')};
  }
`;

const ArtistsResource = unstable_createResource<void, Array<IArtist>>(fetchTopArtists);

const Artists: FunctionComponent<RouteComponentProps> = () => {
  const artists = ArtistsResource.read()

  return (
    <Container>
      {artists.map(artist => <Link to={artist.name}><ArtistContainer>{artist.name}</ArtistContainer></Link>)}
    </Container>
  );
};

export default Artists;