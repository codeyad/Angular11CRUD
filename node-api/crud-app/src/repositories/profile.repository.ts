import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Profile, ProfileRelations} from '../models';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id,
  ProfileRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Profile, dataSource);
  }
}
