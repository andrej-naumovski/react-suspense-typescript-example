import React, { FunctionComponent, useState, useEffect, Suspense } from 'react';
import { Album, fetchArtistTopAlbums } from '../api';
import styled from 'styled-components';
import Spinner from './Spinner';
import ImageComponent from './Image';
import { unstable_createResource } from 'react-cache';
import Img from './Img';

interface Props {
  name: string;
}

const TopAlbumsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 40%;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
`;

const AlbumContainer = styled.div`
  border: 1px solid #A26769;
  line-height: 1.5rem;
  margin: 8px 0;
  padding: 4px;
  width: 350px;
  border-radius: 5px;
  background: #582C4D;
  color: #ECE2D0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopAlbumsResource = unstable_createResource(fetchArtistTopAlbums);

const TopAlbums: FunctionComponent<Props> = ({ name }) => {
  const topAlbums = TopAlbumsResource.read(name);

  return (
    <TopAlbumsContainer>
      {topAlbums.map(album => 
        <AlbumContainer>
          {album.name}
          <Suspense fallback={<Spinner />}>
            <Img src={album.image[2]['#text']} />
          </Suspense>
        </AlbumContainer>
      )
    }
    </TopAlbumsContainer>
  );
};

export default TopAlbums;
