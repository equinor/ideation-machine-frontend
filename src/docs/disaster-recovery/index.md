---
title: Disaster Recovery
---

 # Disaster recovery Documentation

 ## Overview

- What do we need in a DR plan?
- Our definition of a disaster
- What disaster we will plan on
- Backup solution
- Data backup
- DR runbook/procedure for separate disasters
- Automated backup tests?
- Alerts?
- more..

## Definitions of disasters

A disaster occurs when parts of –or our entire solution is unavailable for the end users, due to unforeseen causes. 

An example of this could be a wrongful removal of azure resources that leads to service downtime. 

Disaster we will plan for: 
- A Virtual Machine is corrupted or have been broken by misconfiguration 
  - How: Using VM backups in recovery services vault 
  - Prevention: Limit users control over the vm 
- A resource is deleted 
  - How: With IaC we can easily redeploy a resource group and resources 
  - Prevention: Using Azure PIM and and resource Locks 
- Files are corrupted or deleted 
  - How: Using Azure blob/container blob replication and versioning 
  - Prevention: Limit users access to the minimum needed and resource locks 

Some disasters we will not plan for: 
- An Azure zone goes down. 
  - Why not: Our services are not critical enough to warrant an expensive region migration
- A Recovery Services Vault is deleted.
  - Why not: It's not possible to delete an RSV with dependencies or if it contains data (also in soft deleted state), which makes it basically impossible to do it by mistake.


### A resource is deleted

#### Storage Account
The following conditions must be met to be able to recover a Storage Account:
* The storage account was deleted within the past 14 days.
* A new storage account with the same name has not been created since the original account was deleted.
  * So, make sure to not redeploy environment before the Storage Account is recovered. 
  * NOTE! Be aware that all environments are scheduled to deploy Wednesdays after midnight.

To recover a deleted Storage Account see https://docs.microsoft.com/en-us/azure/storage/common/storage-account-recover.

#### Key Vault
If a Key Vault is deleted by accident you can recover it by doing the following:
  1. Click on the search bar at the top of the page.
  2. Under "Recent Services" click "Key Vault". Do not click an individual key vault.
  3. At the top of the screen click the option to "Manage deleted vaults"

When you delete a key vault or a key vault object, it will remain recoverable for a user configurable retention period or a default of 90 days.
To read more on how to recover a deleted Key Vault see https://docs.microsoft.com/en-us/azure/key-vault/general/key-vault-recovery.

### A VM is corrupted or have been broken by misconfiguration
There is a daily backup job (Daily at 2:30 AM W. Europe Standard Time) and the retention time is 14 days.

To restore a Virtual Machine, go to the relevant Virtual Machine and choose *Backup* on the menu on the left-hand side. Choose the restore point and then choose *Replace existing* (To replace the existing disks on the Virtual Machine) and a *Staging Location* (Use the Storage Account in the relevant environment)

### Files are corrupted or deleted
If files in a storage account are corrupted you can get previous versions by navigating to the relevant storage account, find the file in question and choose versions.

If files in a storage account are deleted, you can navigate to the containers in the relevant storage account and click the *Show deleted blobs*. Deleted files that has been deleted 7 days or more will not show here.


