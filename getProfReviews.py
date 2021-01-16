import RMPClass

ualbertaID = 1407

aapi = RMPClass.RateMyProfAPI(schoolId=ualbertaID, teacher="Gordon Lee")
aapi.retrieveRMPInfo()
print("Prof rating (out of 5)",  aapi.getRMPInfo())